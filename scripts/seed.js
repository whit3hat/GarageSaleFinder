const mongoose = require('mongoose');
const db = require('../models');

//connection to the DB
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/garagesale'
);


const posterSeed = [
    {
        date: "06/11/20,06/12/20,06/13/20",
        location: "7502 W 157th Ter, Overland Park, KS 66223",
        keyword: "kitchen wares, lunch box, glassware"
    },
    {
        date: "06/04/20,06/05/20,06/06/20",
        location: "3940 Cypress Dr, Kansas City, MO 64111",
        keyword: "antiques"
    },
    {
        date: "06/11/20,06/12/20,06/13/20",
        location: "10500 Lackman Rd, Lenexa, KS 66215",
        keyword: "mattress, bicycle"
    },
];

db.Sale
    .remove({})
    .then(() => db.sales.collection.insertMany(posterSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
      console.log(err);
        process.exit(1);
    });