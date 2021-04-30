const mongoose = require("mongoose");

//create a expam schema
const examSchema = new mongoose.Schema({
  exameName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
 
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Exams = mongoose.model("exam", examSchema);
