const User = require("../../models/users/user");
const user = require("../../models/users/user");
const promise = require("../../middleware/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//get all users
exports.getAllUsers = promise(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//add a user
exports.addUser = promise(async (req, res) => {
  //validation joi validation

  //check email exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.json({ message: "email already exists" });
  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const users = new User({
    ...req.body,
    password: hashedPassword,
  });
  const saveUsers = await users.save();
  res.json(saveUsers);
});

//login
exports.login = promise(async (req, res) => {
  //check email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ message: "email does not exists" });
  //Check the two password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).json({ token: token, User: user });
});

//get single User
exports.getSingleUser = promise(async (req, res) => {
  const singleUser = await User.findOne({ _id: req.params.userId });
  res.json(singleUser);
});

//update user
exports.updateUser = promise(async (req, res) => {
  const updateUser = await User.updateOne(
    { _id: req.params.userId },
    { $set: { ...req.body } }
  );
  res.json(updateUser);
});

//delete User
exports.deleteUser = promise(async (req, res) => {
  const deleteUser = await User.deleteOne({ _id: req.params.userId });
  res.json(deleteUser);
});
