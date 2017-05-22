var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movies = require('../controllers/MovieController');

/* GET ALL MOVIES */
router.get('/', function(req, res, next) {
  Movies.list(req,res);
});

/* GET SINGLE MOVIE BY ID */
router.get('/:id', function(req, res, next) {
Movies.findById(req,res);
});

router.post('/save', function(req, res, next) {
  Movies.save(req,res);
});

router.put('/:id', function(req, res, next) {
  Movies.update(req,res,next);
});

router.delete('/:id', function(req, res, next) {
 Movies.delete(req,res);
})

module.exports = router;
