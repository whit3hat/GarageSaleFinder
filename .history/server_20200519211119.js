const express = require("express");
var fs = require("fs");
const multer = require('multer');
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// var Schema = mongoose.Schema;
var db = require('./models');
const User = require("./models/userModel.js");
const routes = require('./routes');
const app = express();
const GridFsStorage = require("multer-gridfs-storage");

const PORT = process.env.PORT || 3001;

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

app.use(logger("dev"));

app.use(express.static("public"));

//Connects to the Mongo DB  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sales"); 
const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost/sales';
 
MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 
  })

// Create storage engine
const storage = new GridFsStorage({
  url: myurl,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})

const upload = multer({ storage })

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

app.post('/api/upload', upload.single('img'), (req, res, err) => {
  if (err) throw err
  res.status(201).send()
})

//Start the API
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

