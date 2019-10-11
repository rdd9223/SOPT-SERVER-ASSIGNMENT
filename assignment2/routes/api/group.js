const express = require('express');
const router = express.Router();
const Member = require('../../model/member');
const csvManager = require('../../module/csvManager');

router.get('/', function(req, res) {
    // TODO 그룹 구성원 전체 보기
    res.render('index', { title: 'Express' });
});

router.get('/:groupIdx', function(req, res) {
    const groupIdx = req.params.groupIdx;
    console.log(groupIdx);
    // TODO 특정 그룹의 인원 보기
    res.render('index', { title: groupIdx });
});

module.exports = router;
