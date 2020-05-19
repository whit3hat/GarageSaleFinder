const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
        date: {
        type: Array,
      },
      location: {
        type: {type: String},
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
  