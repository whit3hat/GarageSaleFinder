const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 8, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  post: Array,

  search: Array,

  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email})
  .exec(function(err, user) {
    if(err) {
      return callback(err)
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, UserSchema.password, function(err, result) {
      if(result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    })
  });
}

UserSchema.pre("save", function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if(err) {
      return next(err);
    }
    username.password=hash;
    next();
  })
})


const User = mongoose.model("User", UserSchema);

module.exports = User;