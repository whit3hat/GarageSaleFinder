const express = require("express");
var fs = require("fs");
const multer = require('multer');
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var Schema = mongoose.Schema;
const User = require("./userModel.js");
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3000;

//Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

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
const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost/garagesale';
 
MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

// Allows for multiple file uploads
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(files)
})

// Enables the saving of images to the database
app.post('/uploadphoto', upload.single('picture'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
var encode_image = img.toString('base64');
// Define a JSONobject for the image attributes for saving to database
var finalImg = {
    contentType: req.file.mimetype,
    image:  new Buffer(encode_image, 'base64')
 };
db.collection('quotes').insertOne(finalImg, (err, result) => {
  console.log(result)

  if (err) return console.log(err)

  console.log('saved to database')
  res.redirect('/')
})
})

// Retrieve images
app.get('/photos', (req, res) => {
  db.collection('mycollection').find().toArray((err, result) => {
   
        const imgArray= result.map(element => element._id);
              console.log(imgArray);
   
     if (err) return console.log(err)
     res.send(imgArray)
   
    })
  });

//Start the API server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
