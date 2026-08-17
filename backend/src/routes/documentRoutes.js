const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createDocument,
  getDocumentById,
  getDocumentsByOwner,
  updateDocument,
  deleteDocument
} = require("../services/documentService");

const router = express.Router();

// Create document
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const documentContent = content || {
      type: "document",
      children: []
    };

    const document = await createDocument(
      title,
      req.user.id,
      documentContent
    );

    res.status(201).json({
      success: true,
      message: "Document created successfully",
      document
    });
  } catch (error) {
    console.error("Create document error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// Get all documents of logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const documents = await getDocumentsByOwner(req.user.id);

    res.json({
      success: true,
      message: "Documents fetched successfully",
      documents
    });
  } catch (error) {
    console.error("Get documents error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// Get document
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const document = await getDocumentById(
      req.params.id,
      req.user.id
    );

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.json({
      success: true,
      message: "Document fetched successfully",
      document
    });
  } catch (error) {
    console.error("Get document error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// Update document
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    const updates = {};

    if (title !== undefined) {
      updates.title = title;
    }

    if (content !== undefined) {
      updates.content = content;
    }

    const document = await updateDocument(
      req.params.id,
      req.user.id,
      updates
    );

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.json({
      success: true,
      message: "Document updated successfully",
      document
    });
  } catch (error) {
    console.error("Update document error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// Delete document
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const document = await deleteDocument(
      req.params.id,
      req.user.id
    );

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.json({
      success: true,
      message: "Document deleted successfully"
    });
  } catch (error) {
    console.error("Delete document error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

module.exports = router;