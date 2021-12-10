const mongoose = require("mongoose");

const Student = mongoose.model("students", {
  name: String,
  age: Number,
  contactNo: Number,
  department: String,
  mentor: {
    type: mongoose.Types.ObjectId,
    ref: "mentors",
  },
});

module.exports = Student;
