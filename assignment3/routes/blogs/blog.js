const express = require('express');
const router = express.Router({mergeParams: true});

const statusCode = require('../../module/utils/statusCode');
const responseMessage = require('../../module/utils/responseMessage');
const authUtil = require('../../module/utils/authUtil');

const Blog = require('../../model/Blog');

const THIS_LOG = '블로그';
/*
    [GET] localhost/blogs
    블로그 전체 보기
*/
router.get('/', (req, res) => {
    /*
        TODO 1 Model에서 값 받아오기
        동기 or 비동기 자유롭게 구현
    */
    Blog.readAll();
    /* 
        TODO 3 결과값 출력
        result는 sample 입니다!
    */
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
    const {blogIdx} = req.params;
    // TODO 1 parameter null check

    /*
        TODO 2 Model에서 값 받아오기
        동기 or 비동기 자유롭게 구현
    */
    Blog.read(blogIdx);
    /* 
        TODO 3 결과값 출력
        result는 sample 입니다!
    */
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
    // TODO 1 parameter null check
    const {} = req.body;
    const json = {};
    /*
        TODO 2 Model에서 값 받아오기
        동기 or 비동기 자유롭게 구현
    */
    Blog.create(json);
    /* 
        TODO 3 결과값 출력
        result는 sample 입니다!
    */
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
    // TODO 1 parameter null check
    const {} = req.body;
    const json = {};
    /*
        TODO 2 Model에서 값 받아오기
        동기 or 비동기 자유롭게 구현
    */
    Blog.update(json);
    /* 
        TODO 3 결과값 출력
        result는 sample 입니다!
    */
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
    // TODO 1 parameter null check
    const {} = req.body;
    const json = {};
    /*
        TODO 2 Model에서 값 받아오기
        동기 or 비동기 자유롭게 구현
    */
    Blog.delete(json);
    /* 
        TODO 3 결과값 출력
        result는 sample 입니다!
    */
    res.status(statusCode.OK).send(authUtil.successTrue(
        responseMessage.X_DELETE_SUCCESS(THIS_LOG)));
});
module.exports = router;
