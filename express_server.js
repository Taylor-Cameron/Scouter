// External Modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');


// Set port 8080
const PORT = 8080;

// Router Imports
const indexRouter = require('./controller/indexRouter');

// Creates an express application
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// logger, Parser, and File Serving
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Compress Routes
app.use(compression());

// Use Router
app.use('/', indexRouter);

// Connect to default port
app.listen(PORT, () => {
  console.log(`App spining up on port ${PORT}!`);
});

module.exports = app;
