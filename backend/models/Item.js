const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["lost", "found"],
    required: true
  },

  // 📸 IMAGE FIELD (NEW)
  image: {
    type: String,
    default: ""
  }

}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);