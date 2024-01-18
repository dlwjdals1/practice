const useDB = require('../middleware/db');

const bookaddView = async (req,res) => {
    return res.render('bookaddView')
};

const bookadd = async (req,res) => {
    
    const booknum = req.body.booknum;
    const bookcode = req.body.bookcode;
    const bookname = req.body.bookname;
    const bookprice = req.body.bookprice;
    const bookyears = req.body.bookyears;

    const insertBookQuery = 'INSERT INTO book (bookcode,bookname,bookprice,bookyears) VALUES(?,?,?,?)';
    await useDB.query(insertBookQuery,[bookcode,bookname,bookprice,bookyears]);

    return res.render('bookaddView')
};

module.exports = {bookaddView, bookadd}