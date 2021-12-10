const router = require("express").Router();
const Mentor = require("../models/mentor");
const Student = require("../models/user");

router.get("/", (req, res) => {
  res.send("Student router is working");
});

router.post("/add", async (req, res) => {
  try {
    const userData = await Student.create(req.body);
    const mentorData = await Mentor.findByIdAndUpdate(
      { _id: userData.mentor },
      {
        $push: { students: userData._id },
      },
      { new: true }
    );
    res.json({ userData, mentor: mentorData });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Student.find({}).populate("mentor", "-_id -students");
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
