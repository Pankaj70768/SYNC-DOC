const Y = require("yjs");

// Store active Yjs documents in memory
const yDocs = new Map();

// Get an existing Yjs document or create a new one
const getYDoc = (documentId) => {
  if (!yDocs.has(documentId)) {
    const ydoc = new Y.Doc();

    yDocs.set(documentId, ydoc);

    console.log(`Yjs document created: ${documentId}`);
  }

  return yDocs.get(documentId);
};

// Initialize the shared document structure
const initializeYDoc = (documentId, initialContent = null) => {
  const ydoc = getYDoc(documentId);

  const root = ydoc.getMap("document");

  if (!root.has("type")) {
    root.set("type", initialContent?.type || "document");
  }

  if (!root.has("content")) {
    const content = new Y.Array();

    if (initialContent?.children) {
      initialContent.children.forEach((node) => {
        content.push([node]);
      });
    }

    root.set("content", content);
  }

  return ydoc;
};

// Remove a Yjs document from memory
const removeYDoc = (documentId) => {
  const ydoc = yDocs.get(documentId);

  if (ydoc) {
    ydoc.destroy();
    yDocs.delete(documentId);

    console.log(`Yjs document removed: ${documentId}`);
  }
};

// Check whether a Yjs document is currently loaded
const hasYDoc = (documentId) => {
  return yDocs.has(documentId);
};

module.exports = {
  getYDoc,
  initializeYDoc,
  removeYDoc,
  hasYDoc
};