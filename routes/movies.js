var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res, next) {

    models.Movie.create({
        name: req.body.name,
    })
    .then(newUser => {
        res.json({ message: 'User created.' })
        res.status(201);
    });

});

module.exports = router;