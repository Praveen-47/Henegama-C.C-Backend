const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

/**
 * impot routes
 */
const userRoutes = require("./routes/users/user");
const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const examsRouter = require("./routes/exams/exams");

const subjectRouter = require("./routes/class/subjects");
const classRouter = require("./routes/class/class");

//init the app
const app = express();
app.use(express.json());
app.use(morgan("dev"));
require("dotenv").config();

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("mongodb connection success!");
})

//routes
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);
app.use("/exams", examsRouter);

app.use("/subjects", subjectRouter);
app.use("/class", classRouter);
app.use("/users", userRoutes);

const port = process.env.PORT || 8070;

app.listen(port, () => console.log(`Connected Successfully He.CC Server ${port}`));
