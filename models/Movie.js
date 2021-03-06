var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var movieSchema = new Schema({
  title: String
});

// the schema is useless so far
// we need to create a model using it
var Movie = mongoose.model('movies',  movieSchema);

// make this available to our users in our Node applications
module.exports = Movie;
