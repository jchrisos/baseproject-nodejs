var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  User.find(function(err, users) {
    
    if (err) {
      res.send(err);
    }

    res.json( users )

  });

});

router.get('/:id', function(req, res, next) {

  var id = req.params.id;

  User.findById(id, function(err, user) {

    if (err) {
      res.send(err);
    }

    res.json( user );

  });

});

router.post('/', function(req, res, next) {

  var user = new User();

  populateUser(user, req);

  user.save(function(err) {
    
    if (err) {
      res.send(err);
    }

    res.json({ message: 'User created.' })
    res.status(201);

  });

}); 

router.put('/:id', function(req, res, next) {

  var id = req.params.id;

  User.findById(id, function(err, user) {
    
    if (err) {
      res.send(err);
    }

    populateUser(user, req);

    user.save(function(err) {
      
      if (err) {
        res.send(err);
      }

      res.json({ message: 'User updated.' });

    });

  });

});

var populateUser = function(user, req) {
  
  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.birthDate = req.body.birthDate;
  user.acceptTerms = req.body.acceptTerms;
  user.amountOfCars = req.body.amountOfCars;
  user.balance = req.body.balance;

};

router.delete('/:id', function(req, res, next) {

  var id = req.params.id;

  User.remove({_id: id}, function(err, user) {

    if (err) {
      res.send(err);
    }

    res.json({ message: 'User removed.'})

  });

});

router.delete('/', function(req, res, next) {

  User.remove({}, function(err) {

    if (err) {
      res.send(err);
    }
    
    res.json({ message: 'All users removed.'})

  });

});

module.exports = router;
