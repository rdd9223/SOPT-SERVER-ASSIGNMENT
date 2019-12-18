var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/article', require('./article'));

module.exports = router;
