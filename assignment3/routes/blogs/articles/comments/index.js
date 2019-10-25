const express = require('express');
const router = express.Router();

router.use('/', require('./comment'));

module.exports = router;
