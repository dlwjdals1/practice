const useDB = require('../middleware/db');

const joinView = async(req,res) => {
    const userid = req.body.userid;
    const userpwd = req.body.userpwd;
    // const userpwd2 = req.body.userpwd2;
    const username = req.body.username;
    const usertel = req.body.usertel;

    // //비밀번호 확인
    // if (userpwd1 !== userpwd2){
    //     const alertpwdMessage = '비밀번호 불일치';
    //     res.send(`<scirpt>alert("${alertpwdMessage}"); window.location.href="/";</script>`);
    // };
    
    //현재 날짜와 시간 가져오기
    const currentDate = new Date();
    const joindate = currentDate.toISOString().split('T')[0];

    //이미 가입된 ID 확인
    const checkid = 'SELECT * FROM user WHERE userid = ?';
    const [exisitingUserRows] = await useDB.query(checkid, [userid]);

    if(exisitingUserRows.length > 0){
        //이미 가입된 id인 경우 알람을 주고 회원가입 중단
        const alertidMessage = '이미 가입된 아이디'
        res.send(`<script>alert("${alertidMessage}"); window.location.href="/";</script>`);
    }else {
        //가입되지 않는 아이디인 경우 회원가입 진행
        const insertUSerQuery = 'INSERT INTO user (userid, userpwd, username, usertel) VALUES(?,?,?,?)';
        await useDB.query(insertUSerQuery,[userid,userpwd,username,usertel]);
        res.redirect('/');
    }
};

module.exports = {joinView}

