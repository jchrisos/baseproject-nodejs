var express = require('express')
var router = express.Router();

router.use('/', require('./index.js'));
router.use('/users', require('./users.js'));

module.exports = router;