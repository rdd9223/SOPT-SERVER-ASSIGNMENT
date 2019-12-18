const express = require('express');
const router = express.Router();
const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const db = require('../module/pool');
// const User = require('../model/user');

router.get('/', async(req, res) => {
    const table = 'blog';

    const getAllBlogsQuery = `SELECT * FROM ${table}`;
    const getAllBlogsResult = db.queryParam_Parse(getAllBlogsQuery);

    if(!getAllBlogsResult){
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    } else {
        res.status(statusCode.OK).send(authUtil.successTrue(responseMessage.BOARD_READ_SUCCESS, getAllBlogsResult));
    }
})

router.post('/', async(req, res) => {
    const {title, writer, intro} = req.body;
    
    if (!title || !writer || !intro) {
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }

    const postBlogQuery = `INSERT INTO blog (title, writer, intro) VALUES ('${title}', '${writer}', '${intro}')`;
    const postBlogResult = await db.queryParam_Parse(postBlogQuery);

    if(!postBlogResult) {
        res.status(500).send('error');
    }
    res.status(statusCode.CREATED).send(authUtil.successTrue(responseMessage.BOARD_CREATE_SUCCESS, postBlogResult));
})

router.put('/', async(req, res) => {
    const {title, writer, intro} = req.body;
    
    if (!title || !writer || !intro) {
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }

    const putBlogQuery = `UPDATE blog SET title = ${title}, intro = ${intro} WHERE writer = ${writer}`;
    const putBlogResult = await db.queryParam_Parse(putBlogQuery);

    if(!putBlogResult) {
        res.status(500).send('error');
    }
    res.status(statusCode.CREATED).send(authUtil.successTrue(responseMessage.BOARD_CREATE_SUCCESS, putBlogResult));
})

router.delete('/', async(req, res) => {
    const {writer} = req.body;
    
    if (!title || !writer || !intro) {
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }

    const deleteBlogQuery = `DELETE FROM blog WHERE writer = ${writer}`;
    const deleteBlogResult = await db.queryParam_Parse(deleteBlogQuery);

    
    if(!deleteBlogResult) {
        res.status(500).send('error');
    }
    res.status(statusCode.CREATED).send(authUtil.successTrue(responseMessage.BOARD_CREATE_SUCCESS, deleteBlogResult));
})
module.exports = router;
