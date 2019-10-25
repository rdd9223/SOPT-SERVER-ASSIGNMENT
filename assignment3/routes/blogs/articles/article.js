const express = require('express');
const router = express.Router({
    mergeParams: true
});
const statusCode = require('../../../module/utils/statusCode');
const responseMessage = require('../../../module/utils/responseMessage');
const authUtil = require('../../../module/utils/authUtil');

const THIS_LOG = '게시글';
/*
    [GET] localhost/blogs/${blogIdx}/articles
    게시글 전체 보기
*/
router.get('/', (req, res) => {
    const {blogIdx} = req.params;
    // result는 sample 입니다!
    const result = [{
        articleIdx: 0,
        title: 'nodejs 시작하기',
        content: 'nodejs란...',
        blogIdx
    }];
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_ALL_SUCCESS(THIS_LOG),
        result));
});
/*
    [GET] localhost/blogs/${blogIdx}/articles/${articleIdx}
    게시글 하나보기
*/
router.get('/:articleIdx', (req, res) => {
    const {blogIdx, articleIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        articleIdx: articleIdx,
        title: 'nodejs 시작하기',
        content: 'nodejs란...',
        blogIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_SUCCESS(THIS_LOG),
        result));
});
/*
    [POST] localhost/blogs/${blogIdx}/articles
    게시글 생성하기
*/
router.post('/', (req, res) => {
    const {blogIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        articleIdx: 0,
        title: 'nodejs 시작하기',
        content: 'nodejs란...',
        blogIdx: blogIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_CREATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [PUT] localhost/blogs/${blogIdx}/articles
    게시글 수정하기
*/
router.put('/', (req, res) => {
    const {blogIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        articleIdx: 0,
        title: 'nodejs 시작하기',
        content: 'nodejs란...',
        blogIdx: blogIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_UPDATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [DELETE] localhost/blogs/${blogIdx}/articles
    게시글 삭제하기
*/
router.delete('/', (req, res) => {
    // result는 sample 입니다!
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_DELETE_SUCCESS(THIS_LOG)));
});
module.exports = router;
