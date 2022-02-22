//require express and app initialize
const express = require("express");
const app = express();

//middleware
const morgan = require("morgan");
app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "./public/index.html")));

//body parsing middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api redirect
app.use("/api", require("./api/index"));
