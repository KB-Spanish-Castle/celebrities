var mongoose = require('mongoose');

var MovieStarSchema = new mongoose.Schema({
  name: String,
  birthday: Date,
  starredIn: String
});

module.exports = mongoose.model("MovieStar", MovieStarSchema);