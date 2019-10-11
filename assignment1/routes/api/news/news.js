var express = require('express');
var router = express.Router();

router.get('/like', (req, res) => {
    res.render('index', { title: 'SOPT NEWS LIKE'});
});

router.get('/', (req, res) => {
    res.render('index', { title: 'SOPT NEWS'});
});

module.exports = router;
