const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//For reading .env file;
require("dotenv").config();

//Import routes;
const postsRoute = require("./routes/posts");

//Middlewares;
app.use(cors());
app.use("/posts", postsRoute);

//For parsing responses to JSON;
app.use(bodyParser.json());

//Routing;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Connecting to database;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to database!");
});

//Start listening to server;
app.listen(3000);
