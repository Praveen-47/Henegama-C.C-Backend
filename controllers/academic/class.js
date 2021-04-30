const Classes = require("../../models/academic/class");
const promise = require("../../middleware/promise");

//get all classes
exports.getAllClasses = promise(async (req, res) => {
  const classes = await Classes.find();
  const totalClasses = await Classes.countDocuments();
  res.status(200).json({ classes, totalClasses });
});

//add new class
exports.createClass = promise(async (req, res) => {
  const classes = new Classes({ ...req.body });
  const saveClass = await classes.save();
  res.status(200).json({ saveClass });
});

//update a class
exports.updateClass = promise(async (req, res) => {
  const classes = await Classes.updateOne(
    { _id: req.params.classId },
    { $set: { ...req.body } }
  );
  const updatedClass = await Classes.findOne({ _id: req.params.classId });
  res.status(200).json({ updatedClass });
});

//delete class
exports.deleteClass = promise(async (req, res) => {
  const deletedClass = await Classes.deleteOne({ _id: req.params.classId });
  if (deletedClass.deletedCount === 0) {
    res.json({ message: "class is not exists" });
  } else {
    res.json({ deletedClass });
  }
});
