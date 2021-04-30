const mongoose = require("mongoose");

const subjectShema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    
  },
  
  class: {
    type: String,
    required: true, //like sience ,maths,art
    //ref comes here
  },
  teacher: {
    type: String,
    required: true,
    //ref comes here
  },
  status: {
    type: Boolean,
    required: true, // Is available
  },// 
});

module.exports = subject = mongoose.model("Subjects", subjectShema);
