const Teacher = require('../models/Teachers');

/**
 * get all the teachers 
 */
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        //count teachers
        const countTeachers = await Teacher.countDocuments();
        res.json({ teachers, countTeachers });
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * get a single teacher
 */
exports.getSingleTeacher = async (req, res) => {
    try {
        const getTeacher = await Teacher.findById(req.params.teacherId);
        res.json(getTeacher)
    } catch (err) {
        res.json({ message: err })
    }
}

/**
 * create a teacher
 */
exports.createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher({
            ...req.body
        });
        const saveTeacher = await teacher.save();
        res.json(saveTeacher);
    } catch (err) {
        res.json({ message: err });
    }
}
/**
 * update a teacher 
 */
exports.updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.updateOne({ _id: req.params.teacherId }, { $set: { ...req.body } });
        res.json({ teacher });
    } catch (err) {
        res.json({ message: err })
    }
}
/**
 * delete a teacher 
 */
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.deleteOne({ _id: req.params.teacherId });
        res.json({ teacher });
    } catch (err) {
        res.json({ message: err })
    }
}