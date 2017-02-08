var express = require('express')
var router = express.Router();

router.use('/', require('./index'));
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

module.exports = router;