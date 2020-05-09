const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const postSchema = mongoose.postSchema({
    _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now
      },
      location: {
        type: Array
      },
      keyword: {
        type: Array
      }
    });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;