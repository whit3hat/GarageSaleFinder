const mongoose = require('mongoose');
const db = require('../models');

//connection to the DB
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/garagesale'
);


const posterSeed = [
    {
        date: " ",
        location: " ",
        keyword: " "
    },
    {
        date: " ",
        location: " ",
        keyword: " "
    },
    {
        date: " ",
        location: " ",
        keyword: " "
    },
];

db.Post
    .remove({})
    .then(() => db.Post.collection.insertMany(posterSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        process.exit(1);
    });
