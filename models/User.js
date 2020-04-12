const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name:{
    type: String,
  },
  last_name:{
    type: String,
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  date:{
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
