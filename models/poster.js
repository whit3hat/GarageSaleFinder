const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const ItemSchema = Sales.db;

var Sales = new ItemSchema(
  { img: 
      { data: Buffer, contentType: String }
  }
);
var Post = mongoose.model('Sales',postSchema);

const postSchema = mongoose.postSchema({
    _id: mongoose.Schema.Types.ObjectId,
        date: {
        type: Array,
      },
      location: {
        type: "Point",
      coordinates:[]
      },
      keyword: {
        type: Array
      },
      description: {
          type: String
      }
    });

const Search = mongoose.model("Sales", searchSchema);

const searchSchema = mongoose.searchSchema({
  _id: mongoose.Schema.Types.ObjectId,
      date: {
      type: Array,
    },
    location: {
      type: "Point",
    coordinates:[]
    },
    keyword: {
      type: Array
    },
    description: {
        type: String
    }
});

// const Search = mongoose.model("Search", searchSchema);

module.exports = Post;module.exports = Search;