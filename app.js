// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const errorhandler = require('errorhandler');
const logger = require('morgan');
const config = require('./config/config');
const bucketlist = require('./controllers/bucketlist');

// Connect mongoose to database
mongoose.connect(config.db);

// Initialize app variable
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorhandler());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Invalid page');
});

// Routing all HTTP requests to /bucketlist to bucketlist controller
app.use('/bucketlist', bucketlist);

// Listen to port 3000
app.listen(config.port, () => {
  console.log(`Starting the server at port ${config.port}`);
});
