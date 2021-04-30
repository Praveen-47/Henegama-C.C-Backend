const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teachers')

//get all the teachers
router.get('/', teacherController.getAllTeachers);
//get a single teacher
router.get('/:teacherId', teacherController.getSingleTeacher);
//add teacher 
router.post('/', teacherController.createTeacher);
//update teacher
router.put('/:teacherId', teacherController.updateTeacher);
//delete teacher
router.delete('/:teacherId', teacherController.deleteTeacher);


module.exports = router