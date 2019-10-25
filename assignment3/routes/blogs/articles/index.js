const express = require('express');
const router = express.Router();

router.use('/comments', require('./comments'));
router.use('/', require('./article'));

module.exports = router;
