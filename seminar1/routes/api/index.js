var express = require('express');
var router = express.Router();

// base: localhost:3000

// localhost:3000/auth
// localhost:3000/auth/signup
// localhost:3000/auth/signin
router.use('/auth', require('./auth'));
router.use('/board', require('./board'));
router.use('/cafe', require('./cafe'));
router.use('/blog', require('./blog'));
router.use('/news', require('./news'));

module.exports = router;
