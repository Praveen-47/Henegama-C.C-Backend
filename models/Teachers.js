const mongoose = require("mongoose");

/**
 * creating the schema
 */
const teahcerSchema = new mongoose.Schema({
  teahcerId: {
    type: Number,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
 
  date: {
    type: String,
    require: true,
  },
});

module.exports = Teacher = mongoose.model("teacher", teahcerSchema);
