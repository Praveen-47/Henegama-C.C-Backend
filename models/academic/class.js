const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  classSection: {
    type: String,
    required: true,
  },
 
  note: {
    type: String,
    required: false,
  }
  
});
module.exports = className = mongoose.model("Class", classSchema);
