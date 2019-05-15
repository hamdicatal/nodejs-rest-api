const express = require("express");
const app = express();
const mongoose = require("mongoose");

//For reading .env file;
require('dotenv').config()

//Import routes;
const postsRoute = require('./routes/posts');

//Middlewares;
app.use('/posts', postsRoute);

//Routing;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Connecting to database;
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to database!");
  }
);

//Start listening to server;
app.listen(3000);
