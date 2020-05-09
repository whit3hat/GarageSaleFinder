const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const searchSchema = mongoose.searchSchema({
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

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;