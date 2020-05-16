const mongoose = require('mongoose');
const db = require('../models');

//connection to the DB
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/', {
        useNewUrlParser: true,
        useFindAndModify: false
      });

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




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
        date: "06/11/20,06/12/20,06/13/20 ",
        location: "3940 Cypress Dr, Kansas City, MO 64111",
        keyword: "antiques"
    },
    {
        date: "06/11/20,06/12/20,06/13/20 ",
        location: "10500 Lackman Rd, Lenexa, KS 66215",
        keyword: "mattress, bicycle"
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