const express = require("express");
const app = express();
const path = require("path");
const parser = require("body-parser");
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');


const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));
app.use(parser.json());

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log(`Listening on port ${this.address().port}`);
});
