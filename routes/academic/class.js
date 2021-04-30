const express = require("express");
const router = express.Router();
const classController = require("../../controllers/academic/class");

router
  .get("/get", classController.getAllClasses)
  .post("/add", classController.createClass)
  .put("/update/:classId", classController.updateClass)
  .delete("/delete/:classId", classController.deleteClass);

module.exports = router;
