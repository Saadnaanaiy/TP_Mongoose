const { Student } = require("../model/db.js");

const getAllStudentsFromDatabase = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students) {
      return res.status(400).json({ success: false, message: "No students!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Students", students: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addStudentToDatabase = async (req, res) => {
  try {
    const { name, age, program, enrolled } = req.body;
    if (!name || !age || !program || !typeof enrolled === undefined) {
      return res.status(400).json({ success: false, message: "no data!" });
    }

    const newStudent = new Student({
      name,
      age,
      program,
      enrolled,
    });

    await newStudent.save();

    res
      .status(201)
      .json({ success: true, message: "student added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteStudentFromDatabase = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateStudentFromDatabase = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, program, enrolled } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, {
      name,
      age,
      program,
      enrolled,
    });
    if (!updatedStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    updatedStudent.name = name;
    updatedStudent.age = age;
    updatedStudent.program = program;
    updatedStudent.enrolled = enrolled;

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllStudentsFromDatabase,
  addStudentToDatabase,
  deleteStudentFromDatabase,
  updateStudentFromDatabase,
};
