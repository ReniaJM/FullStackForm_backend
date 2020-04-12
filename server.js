const express = require('express');
const connectDB = require('./config/db');
const bodyParser= require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const user = require('./routes/Users');
const config = require('./config/global');

// connect database
connectDB();

// connect server
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.header("Access-Control-Expose-Headers");

  next();
});
app.use(morgan('dev'));
app.use('/', user);


app.listen(config.port, ()=> console.log(`Welcome on port ${config.port}`));

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
