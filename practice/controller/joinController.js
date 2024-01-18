const useDB = require('../middleware/db');

const joinView = async (req,res) => {
    return res.render('joinView')
};

const join = async (req,res) => {
    // req.body => form에 있는 데이터
    // req.body가져와서 db에 저장
    const usernum = req.body.usernum;
    const userid = req.body.userid;
    const userpwd = req.body.userpwd;
    const username = req.body.username;
    const usertel = req.body.usertel;

    const insertUserQuery = 'INSERT INTO user (userid, userpwd,username,usertel) VALUES(?,?,?,?)';
    await useDB.query(insertUserQuery,[userid, userpwd,username,usertel]);

    return res.render('loginView')
};



module.exports = {joinView, join}