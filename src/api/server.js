const cors = require("cors");
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
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

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
