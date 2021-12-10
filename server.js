const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoDB = require("./config/db");
const mentorRouter = require("./routes/mentor");
const studentRouter = require("./routes/user");

app.use(express.json());

app.use("/mentor", mentorRouter);
app.use("/student", studentRouter);

mongoDB();

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(PORT, () => {
  console.log("server is up and running");
});
