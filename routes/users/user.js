const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/user");

router.get("/get", userController.getAllUsers);
router.get("/get/:userId", userController.getSingleUser);
router.post("/register", userController.addUser);
router.post("/login", userController.login);
router.put("/update/:userId", userController.updateUser);
router.delete("/delete/:userId", userController.deleteUser);

module.exports = router;
