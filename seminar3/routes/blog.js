const express = require('express');
const router = express.Router();
const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const db = require('../module/pool');
// const User = require('../model/user');

router.get('/', async(req,res) => {
    const table = 'user';
    const {title, writer, intro} = req.body;

    const getAllBlogsQuery = `SELECT * FROM ${table}`
    const getAllBlogsResult = db.queryParam_Parse(getAllBlogsQuery)

    if(!getAllBlogsResult){
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
    } else {
        res.status(statusCode.OK).send(authUtil.successTrue(responseMessage.BOARD_READ_SUCCESS), getAllBlogsResult)
    }
})
module.exports = router;
