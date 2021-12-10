const router = require("express").Router();
const Mentor = require("../models/mentor");

router.get("/", (req, res) => {
  res.send("Mentor route is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Mentor.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Mentor.find({}).populate(
      "students",
      "name age department contactNo -_id"
    );
    res.json(data);
  } catch (err) {
    console.log({ msg: err.message });
  }
});

module.exports = router;
