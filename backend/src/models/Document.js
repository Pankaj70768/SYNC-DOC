const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    content: {
      type: {
        type: String,
        required: true,
        default: "document"
      },

      children: {
        type: [mongoose.Schema.Types.Mixed],
        default: []
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Document", documentSchema);