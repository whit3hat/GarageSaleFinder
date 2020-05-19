const mongoose = require("mongoose");
// var bcrypt = require("bcrypt");
// const dbName = sales.db;

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

  module.exports = Search;