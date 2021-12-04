const cors = require("cors");
const express = require("express");
const config = require("./config");
const routes = require("./routes");
const mongoose =  require("mongoose");
const passport = require("./passport");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: config.cors.origins,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(config.auth.secret));

passport(app);


app.get("/", (req, res) => {
  res.send("Working!");
});

app.use(async (req, res, next) => {
  await mongoose.connect(config.mongodb.uri)
  next();
});

app.use(routes);

module.exports = app;
