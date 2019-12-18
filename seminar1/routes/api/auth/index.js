var express = require('express');
var router = express.Router();

// base: localhost:3000

// localhost:3000/auth
// localhost:3000/auth/signup
// localhost:3000/auth/signin
router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));
module.exports = router;
