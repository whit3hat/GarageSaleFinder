const mongoose = require('mongoose');
const db = require('./models');

//connection to the DB
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/sales'
);


const salesSeed = [
    {
        date: " ",
        location: " ",
        keyword: " ",
        description: " "
    },
    {
        date: " ",
        location: " ",
        keyword: " ",
        description: " "
    },
    {
        date: " ",
        location: " ",
        keyword: " ",
        description: " "
    },
];

db.Sales
    // .remove({})
    .then(() => db.Sales.collection.insertMany(salesSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err)
        process.exit(1);
    });
