const express = require('express');
const router = express.Router({mergeParams: true});

const statusCode = require('../../module/utils/statusCode');
const responseMessage = require('../../module/utils/responseMessage');
const authUtil = require('../../module/utils/authUtil');

const THIS_LOG = '블로그';
/*
    [GET] localhost/blogs
    블로그 전체 보기
*/
router.get('/', (req, res) => {
    // result는 sample 입니다!
    const result = [{blogIdx: 0, name: 'velopert', url: 'https://velopert.com/'}];
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_ALL_SUCCESS(THIS_LOG),
        result));
});
/*
    [GET] localhost/blogs/${blogIdx}
    블로그 하나보기
*/
router.get('/:blogIdx', (req, res) => {
    // result는 sample 입니다!
    const {blogIdx} = req.params;
    const result = {blogIdx, name: 'velopert', url: 'https://velopert.com/'};
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_READ_SUCCESS(THIS_LOG),
        result));
});
/*
    [POST] localhost/blogs/
    블로그 생성하기
*/
router.post('/', (req, res) => {
    // result는 sample 입니다!
    const result = {blogIdx: 0, name: 'velopert', url: 'https://velopert.com/'};
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_CREATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [PUT] localhost/blogs/
    블로그 수정하기
*/
router.put('/', (req, res) => {
    // result는 sample 입니다!
    const result = {blogIdx: 0, name: 'velopert', url: 'https://velopert.com/'};
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_UPDATE_SUCCESS(THIS_LOG),
        result));
});
/*
    [DELETE] localhost/blogs/
    블로그 삭제하기
*/
router.delete('/', (req, res) => {
    // result는 sample 입니다!
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_DELETE_SUCCESS(THIS_LOG)));
});
module.exports = router;
