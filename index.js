const express = require("express");
const dotenv = require("dotenv");
const { connectionToDatabase } = require("./database/database.js");
const {
  getAllStudentsFromDatabase,
  addStudentToDatabase,
  deleteStudentFromDatabase,
  updateStudentFromDatabase,
} = require("./controllers/studentsController.js");

const app = express();
app.use(express.json());
dotenv.config();

app.get("/students", getAllStudentsFromDatabase);

app.post("/students", addStudentToDatabase);

app.delete("/students/:id", deleteStudentFromDatabase);

app.put("/students/:id", updateStudentFromDatabase);


app.listen(process.env.PORT, () => {
  console.log(`App Running On http://localhost:${process.env.PORT}/students`);
  connectionToDatabase(process.env.MONGO_URI);
});
