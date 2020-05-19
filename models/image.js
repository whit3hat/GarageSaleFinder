const mongoose = require("mongoose");


var Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Img = mongoose.model('Image',postSchema);

  module.exports = Img;