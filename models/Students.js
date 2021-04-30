const mongoose = require("mongoose");

//defining the schema
const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  studentClass: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  nic :{
    type:Number,
    required:false
  },
  indexNumber:{
    type:Number,
    required:true
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
