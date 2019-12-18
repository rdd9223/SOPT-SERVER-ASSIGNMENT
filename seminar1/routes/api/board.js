var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('게시판입니다.');
})
module.exports = router;
