const Document = require("../models/Document");

// Create a new document
const createDocument = async (title, owner, content) => {
  const document = await Document.create({
    title,
    owner,
    content
  });

  return document;
};

// Load a document
const getDocumentById = async (documentId, owner) => {
  const document = await Document.findOne({
    _id: documentId,
    owner
  });

  return document;
};
// Get all documents of an owner
const getDocumentsByOwner = async (owner) => {
  const documents = await Document.find({
    owner
  }).sort({
    updatedAt: -1
  });

  return documents;
};

// Update a document
const updateDocument = async (documentId, owner, updates) => {
  const document = await Document.findOneAndUpdate(
    {
      _id: documentId,
      owner
    },
    updates,
    {
      new: true,
      runValidators: true
    }
  );

  return document;
};

// Delete a document
const deleteDocument = async (documentId, owner) => {
  const document = await Document.findOneAndDelete({
    _id: documentId,
    owner
  });

  return document;
};
module.exports = {
  createDocument,
  getDocumentById,
  getDocumentsByOwner,
  updateDocument,
  deleteDocument
};