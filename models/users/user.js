const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
  },
  password: {
    type: String,
    minlength: 4,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//some validation

module.exports = user = mongoose.model("User", userSchema);
