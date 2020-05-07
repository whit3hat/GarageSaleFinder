const express = require("express");

const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./userModel.js");
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3000;

//Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (Heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

//Disabled for now, not sure if its needed
// app.use(logger("dev"));

app.use(express.static("public"));

//Connects to the Mongo DB  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garagesale"); //Will need to update once the DB is completed

//Start the API server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
