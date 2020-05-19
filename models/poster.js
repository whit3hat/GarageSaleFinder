const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = new Schema({
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

const sales = mongoose.model('Sales',postSchema);

module.exports = sales;
