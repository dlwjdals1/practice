const useDB = require('../middleware/db');

const mainView = (req,res) => {
    return res.render('main', {user: null})
};

module.exports = {mainView}