const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = new Schema({
        date: {
        type: Array,
      },
      location: {
        type: Array,
      },
      keyword: {
        type: Array
      },
      description: {
          type: Array
      }
    });

const Sale = mongoose.model('Sale',postSchema);

module.exports = Sale;
