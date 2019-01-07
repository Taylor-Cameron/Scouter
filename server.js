// External Modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');

// Set port 8080
const PORT = process.env.PORT || 5000;

// Router Imports
const apiRouter = require('./controller/routes/redisApiRoute');

// Creates an express application
const app = express();
app.use(cors());

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
app.use('/', apiRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;

