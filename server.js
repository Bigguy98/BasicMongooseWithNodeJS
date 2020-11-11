const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const router = require("./router/main")


// connect to mongoDb
const uri = "mongodb+srv://123456aA:123456aA@cluster0.wniry.mongodb.net/example?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// to parse request body
app.use(bodyParser.json());
// set router for app
app.use("/api/employee", router);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});