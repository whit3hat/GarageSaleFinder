const mongoose = require('mongoose');
const db = require('../models');

//connection to the DB
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/'
);

