const jwt = require("jsonwebtoken");

const Document = require("../models/Document");

const {
  initializeYDoc
} = require("./yjsService");

// Authenticate Socket.io connections using the existing JWT
const authenticateSocket = (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(new Error("Authentication token required"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    socket.user = decoded;

    next();
  } catch (error) {
    return next(new Error("Invalid or expired token"));
  }
};

// Setup Socket.io collaboration events
const setupSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    console.log(`Authenticated user: ${socket.user.id}`);

    socket.on("join-document", async (documentId) => {
      try {
        if (!documentId) {
          socket.emit("document-error", {
            message: "Document ID is required"
          });

          return;
        }

        // Check that the document belongs to the authenticated user
        const document = await Document.findOne({
          _id: documentId,
          owner: socket.user.id
        });

        if (!document) {
          socket.emit("document-error", {
            message: "Document not found or access denied"
          });

          return;
        }

        // Initialize Yjs document using MongoDB content
        initializeYDoc(documentId, document.content);

        // Join the Socket.io room for this document
        socket.join(documentId);

        console.log(
          `User ${socket.user.id} joined document: ${documentId}`
        );

        socket.emit("document-joined", {
          documentId
        });
      } catch (error) {
        console.error("Join document error:", error.message);

        socket.emit("document-error", {
          message: "Failed to join document"
        });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

module.exports = {
  authenticateSocket,
  setupSocketHandlers
};