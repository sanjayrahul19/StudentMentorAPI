const mongoose = require("mongoose");
const url =
  "mongodb+srv://sanjayrahul:1234567890@cluster0.c1oms.mongodb.net/MentorAndStudentApi?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`mongoDB connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
