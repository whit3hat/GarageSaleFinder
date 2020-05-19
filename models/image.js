const mongoose = require("mongoose");
// var bcrypt = require("bcrypt");
// const dbName = sales.db;

var Item = new ItemSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Img = mongoose.model('Image',postSchema);

  module.exports = Img;