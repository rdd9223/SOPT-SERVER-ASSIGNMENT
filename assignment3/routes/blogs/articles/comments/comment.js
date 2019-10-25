const express = require('express');
const router = express.Router({
    mergeParams: true
});
const statusCode = require('../../../../module/utils/statusCode');
const responseMessage = require('../../../../module/utils/responseMessage');
const authUtil = require('../../../../module/utils/authUtil');

const THIS_LOG = '댓글';
/*
    [GET] localhost/blogs/${blogIdx}/articles/${articleIdx}/comments
    댓글 전체 보기
*/
router.get('/', (req, res) => {
    const {articleIdx} = req.params;
    // result는 sample 입니다!
    const result = [{
        commentIdx: 0,
        writer: '윤희성',
        content: 'good :)',
        articleIdx
    }];
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_ALL_SUCCESS(THIS_LOG),
        result));
});
/*
    [GET] localhost/blogs/${blogIdx}/articles/${articleIdx}/comments/${commentIdx}
    댓글 하나보기
*/
router.get('/:commentIdx', (req, res) => {
    const {articleIdx, commentIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        commentIdx,
        writer: '윤희성',
        content: 'good :)',
        articleIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_SUCCESS(THIS_LOG),
        result));
});
/*
    [POST] localhost/blogs/${blogIdx}/articles/${articleIdx}/comments
    댓글 생성하기
*/
router.post('/', (req, res) => {
    const {articleIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        commentIdx: 0,
        writer: '윤희성',
        content: 'good :)',
        articleIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_CREATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [PUT]  localhost/blogs/${blogIdx}/articles/${articleIdx}/comments
    댓글 수정하기
*/
router.put('/', (req, res) => {
    const {articleIdx} = req.params;
    // result는 sample 입니다!
    const result = {
        commentIdx: 0,
        writer: '윤희성',
        content: 'good :)',
        articleIdx
    };
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_UPDATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [DELETE] localhost/blogs/${blogIdx}/articles/${articleIdx}/comments
    댓글 삭제하기
*/
router.delete('/', (req, res) => {
    // result는 sample 입니다!
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_DELETE_SUCCESS(THIS_LOG)));
});
module.exports = router;
