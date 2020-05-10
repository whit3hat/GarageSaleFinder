const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

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

module.exports = Post;