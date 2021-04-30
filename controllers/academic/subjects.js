const Subjects = require("../../models/academic/subjects");
const promise = require("../../middleware/promise");

//get all subjects
exports.getAllSubjects = promise(async (req, res) => {
  const subjects = await Subjects.find();
  const totalSubjects = await Subjects.countDocuments();
  res.status(200).json({ subjects, totalSubjects });
});

//add new subject
exports.createSubject = promise(async (req, res) => {
  const subjects = new Subjects({ ...req.body });
  const saveSabjects = await subjects.save();
  res.status(200).json({ saveSabjects });
});

//update subject
exports.updateSubject = promise(async (req, res) => {
  const updateSubject = await Subjects.updateOne(
    { _id: req.params.subjectId },
    { $set: { ...req.body } }
  );
  const updatedSubject = await Subjects.findOne({ _id: req.params.subjectId });
  res.status(200).json({ updatedSubject });
});

//delete subject
exports.deleteSubject = promise(async (req, res) => {
  const deleteSubject = await Subjects.deleteOne({ _id: req.params.subjectId });
  if (deleteSubject.deletedCount === 0) {
    res.status(404).json({ message: "subject is not found" });
  } else {
    res.status(200).json({ deleteSubject });
  }
});
