const Exams = require('../../models/exams/exams');
const promise = require('../../middleware/promise');

/**
 * Get all the exams
 * Paginate the exams
 * Get the total number of exams
 */
exports.getExams = promise(async (req, res) => {
    const page = req.query.page;
    const ItemsPerPge = 10;
    const exams = await Exams.find()
        .skip((page - 1) * ItemsPerPge)
        .limit(ItemsPerPge)
    const totalExams = await Exams.countDocuments();
    res.json({ exams, totalExams });
});

/**
 * Add new exam
 */
exports.addExam = promise(async (req, res) => {
    const exams = new Exams({ ...req.body });
    const saveExams = await exams.save();
    res.json({ saveExams });
});

/**
 * update an existing exam
 */
exports.updateExam = promise(async (req, res) => {
    const exams = await Exams.findOneAndUpdate(
        { _id: req.params.examId },
        { $set: { ...req.body } },
        { useFindAndModify: false }
    );
    res.status(200).json({ exams });
});
/**
 * delete the exam
 */
exports.deleteExams = promise(async (req, res) => {
    const exams = await Exams.findOneAndDelete({ _id: req.params.examId });
    if (exams) {
        res.json({ exams });
    } else {
        res.json({ message: `the exam with the id of ${req.params.examId} does not exits` })
    }
});
