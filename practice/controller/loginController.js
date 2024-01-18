const useDB = require('../middleware/db');

const loginView = (req,res) => {
    return res.render('loginView')
};

const login = async (req, res) => {
    const {userid, userpwd} = req.query;

    const q = 'SELECT * FROM USER WHERE userid = ?';
    const userData = await useDB.query(q, [userid]);

    console.log(userData[0].length)

    if (userData[0].length == 0) {
        const alertidMessage = '가입 정보가 없습니다.'
        return res.send(`<script>alert("${alertidMessage}"); window.location.href="/";</script>`);
    } // 에러 처리

    const user = userData[0][0];

    console.log(userData[0])

    if (user.userpwd != userpwd) {
        const alertidMessage = '비밀번호가 틀렸습니다.'
        return res.send(`<script>alert("${alertidMessage}"); window.location.href="/";</script>`);
    }

    return res.render('main', {user});
}

const logout = (req, res) => {
    return res.redirect('/')
}

module.exports = {loginView, login, logout}