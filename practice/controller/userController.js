const useDB = require('../middleware/db');

const userView = async(req,res) => {
    let viewQuery = 'SELECT * FROM user';
    const user = await useDB.query(viewQuery);
    
    console.log(user);
    return res.render('userView', {data:user[0]});
};


module.exports = {userView}



// controller.js
// // 회원보기 (admin)
// exports.viewUsers = async(req, res) => {
//     if (req.session.user.is_admin) {
//         const users = await pool.query('SELECT * FROM user');
//         res.render('admin/users', {data: users[0]});
//     } else {
//         res.redirect('/error');
//     }
// }