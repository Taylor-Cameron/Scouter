const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // default port 3000
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// Main page
app.get('/', (req, res) => {
  res.render('main.ejs');
});

// Main page
app.get('/gridwatch', (req, res) => {
  res.render('home-page.ejs');
});

// Error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res
      .status(500)
      .send('Oops! Something isn\'t right here! Please go back to the previous page');
});


// Port listener
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
