const express = require("express");
const router = express.Router();

//model
const studentsController = require("../controllers/students");
const verifyToken = require("../middleware/verifyToken");

// GET students
router.get("/get", verifyToken, studentsController.getAllStudents);
// POST students
router.post("/add", verifyToken, studentsController.createStudent);
//Single Student
router.get("/get/:studentId", verifyToken, studentsController.getSingleStudent);
//update a student
router.put("/update/:studentId", verifyToken, studentsController.updateStudent);
//delete a student
router.delete(
  "/delete/:studentId",
  verifyToken,
  studentsController.deleteStudent
);

module.exports = router;
