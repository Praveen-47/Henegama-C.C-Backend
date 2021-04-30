const router = require("express").Router();
const subjectController = require("../../controllers/academic/subjects");

module.exports = router
  .get("/get", subjectController.getAllSubjects)
  .post("/add", subjectController.createSubject)
  .put("/update/:subjectId", subjectController.updateSubject)
  .delete("/delete/:subjectId", subjectController.deleteSubject);
