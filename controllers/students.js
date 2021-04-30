const Student = require('../models/Students');

/**
 * get all the students
 */
exports.getAllStudents = async (req, res) => {

    try {
        const students = await Student.find();
        res.json({ students });
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * get a single student by id
 */
exports.getSingleStudent = async (req, res) => {
    try {
        const singlestudent = await Student.findById(req.params.studentId);
        res.json({ singlestudent });
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * create new student
 */
exports.createStudent = async (req, res) => {
    try {
        const student = new Student({
            ...req.body
        })
        const saveStudent = await student.save();
        res.json(saveStudent);
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * update a Student
 */
exports.updateStudent = async (req, res) => {
    try {
        const updateStudent = await Student.updateMany({ _id: req.params.studentId },
            {
                $set:
                {
                    ...req.body
                }
            })
        res.json({ updateStudent });
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * delete a student
 */
exports.deleteStudent = async (req, res) => {
    try {
        const deletestudent = await Student.deleteOne({ _id: req.params.studentId });
        res.json({ deletestudent });
    } catch (err) {
        res.json({ message: err })
    }
}