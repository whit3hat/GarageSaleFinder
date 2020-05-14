const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const dbName = sales.db;

var Item = new ItemSchema(
  { img: 
      { data: Buffer, contentType: String }
  }
);
var Post = mongoose.model('Image',postSchema);

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

const Post = mongoose.model("Post", postSchema);

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

const Search = mongoose.model("Search", searchSchema);

module.exports = Post;module.exports = Search;