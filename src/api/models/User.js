const mongoose = require("mongoose")

module.exports = mongoose.model("User", mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: { unique: true},
  },
  password: {
    type: String,
    required: true,
  }
}))
