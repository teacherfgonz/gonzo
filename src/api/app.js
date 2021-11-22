const cors = require("cors");
const express = require("express");
const passport = require("passport");
const config = require("./config");

const app = express();

app.use(
  cors({
    origin: config.cors.origins,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("Working!");
});

module.exports = app;
