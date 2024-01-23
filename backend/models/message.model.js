const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    sent: {
      type: Boolean,
    },
    conversationID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
