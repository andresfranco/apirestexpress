var mongoose = require('mongoose'),
Movie = require('../models/Movie');

  //GET - Return all Movies in the DB
  exports.list = function(req, res) {
    Movie.find(function (err, movies) {
      if (err) return next(err);
      res.json(movies);
    });
  };

  exports.findById = function(req,res){
    Movie.findById(req.params.id, function (err, movie) {
      if (err) return next(err);
      res.json(movie);
    });
  };

exports.save = function(req,res){

  Movie.create(req.body, function (err, movie) {
    if (req.body.title != null) movie.title = req.body.title;
    if (err) return next(err);
    res.json(movie);
  });
};

exports.update = function (req,res,next){
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, movie) {
    if (req.body.title != null) movie.title = req.body.title;
    if (err) return next(err);
    res.json(movie);
  });
};

exports.delete =function(req,res){
  Movie.findByIdAndRemove(req.params.id, req.body, function (err, movie) {
    if (err) return next(err);
    res.json(movie);
  });
}
