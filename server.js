const express = require('express');
const connectDB = require('./config/db');

// connect server
const app = express();

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=> res.send('API'));

app.listen(PORT, ()=> console.log(`listen from port ${PORT}`));
