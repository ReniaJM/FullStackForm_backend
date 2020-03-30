const mongoose = require('mongoose');
const config = require ('config');
const db = config.get('mongoURLI');

const connectDB = async () => {
  try {
    await mongoose.connect(db,{
      useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('connection with DB')

  }catch (err) {
    console.log(err.measure);
    process.exit(1)
  }
};

module.exports = connectDB;

