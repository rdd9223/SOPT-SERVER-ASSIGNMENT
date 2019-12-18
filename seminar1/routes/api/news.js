var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.send('뉴스입니다.');
})

router.get('/like', (req, res) => {
    res.send('뉴스 좋아요.');
})

module.exports = router;