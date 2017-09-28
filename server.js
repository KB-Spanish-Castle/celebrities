var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var MovieStar = require('./models/movieStar');

var mongodbUri = 'mongodb://localhost/movieStars';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);

var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});
app.get("/stars", function(req, res){
  MovieStar.find(function(err,stars){
    res.json(stars);
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});