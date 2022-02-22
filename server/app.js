//require express and app initialize
const path = require('path')
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
module.exports = app;

//middleware
app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api redirect
app.use("/api", require("./api/index"));

// will always serve up the inital html for any routes that we haven't specified
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
 