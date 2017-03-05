var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {

    models.Movie.findAll()
    .then(function(result) {
        res.json(result);
    });

});

router.get('/:id', function(req, res, next) {

    var id = req.params.id;

    models.Movie.findById(id)
    .then(function(movie) {
        res.json(movie);
    });

});

router.post('/', function(req, res, next) {

    models.Movie.create({
        name: req.body.name
    })
    .then(newUser => {
        res.json({ message: 'User created.' })
        res.status(201);
    });

});

router.put('/:id', function(req, res, next) {

    var id = req.params.id;

    models.Movie.findById(id)
    .then(function(movie) {

        movie.update({
            name: req.body.name
        }).then(function(){});

        res.json(movie);
    });

});

router.delete('/:id', function(req, res, next) {

    var id = req.params.id;

    models.Movie.findById(id)
    .then(function(movie) {

        movie.destroy();

        res.json({ message: 'User deleted.' });
    });

});

module.exports = router;