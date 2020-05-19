const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var imgSchema = new Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Img = mongoose.model('Image', imgSchema);

  module.exports = Img;