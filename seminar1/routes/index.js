var express = require('express');
var router = express.Router();

// base: localhost:3000

router.use('/api', require('./api'));

module.exports = router;
