const useDB = require('../middleware/db');

const bookaddView = async(req,res) => {
    const bookcode = req.body.bookcode;
    const bookname = req.body.bookname;
    const bookprice = req.body.bookprice;
    const bookyears = req.body.bookyears;

    const insertBookQuery = 'INSERT INTO book (bookcode,bookname,bookprice,bookyears) VALUES(?,?,?,?)';
    await useDB.query(insertBookQuery,[bookcode,bookname,bookprice,bookyears]);
    res.redirect('/');
};

module.exports = {bookaddView}