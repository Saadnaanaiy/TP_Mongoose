const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  program: String,
  enrolled: Boolean,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };
