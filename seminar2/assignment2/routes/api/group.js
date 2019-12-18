const express = require('express');
const router = express.Router();
const csvManager = require('../../module/csvManager');
const groupMixer = require('../../module/groupMixer');

// 그룹 전체 구성을 보여준다
router.get('/', async (req, res) => {
    try {
        const groupArray = await csvManager.read('group.csv');
        const memberArray = await csvManager.read('member.csv');
        const resultArray = [];
        for (let member of memberArray) {
            for (let group of groupArray) {
                if (member.groupIdx == group.groupIdx) {
                    resultArray.push(`${member.name}: ${group.name}`);
                }
            }
        }
        res.status(200).send(resultArray.sort());
    } catch (err) {
        console.log(err);
        res.status(500).send('오류');
    }
});

// 섞어먹는 형식
router.get('/mixer', async (req, res) => {
    try{
        const memberArray = await csvManager.read('member.csv');
        const newArray = groupMixer.mix(memberArray);
        await csvManager.write('member.csv', newArray);
        res.status(200).send('success to mix group');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

// 보고싶은 조를 queryParam으로 넘겨주면 조회한다
router.get('/:groupIdx', async (req, res) => {
    const groupIdx = req.params.groupIdx;
    try{
        const memberArray = await csvManager.read('member.csv');
        const groupArray = await csvManager.read('group.csv');
        const resultArray = []
        for(member of memberArray){
            if(member.groupIdx == groupIdx)
                resultArray.push(member.name)
        }
        res.status(200).send(resultArray)
    } catch (err){
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;
