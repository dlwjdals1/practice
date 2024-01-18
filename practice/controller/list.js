const useDB = require('../middleware/db');

const listView = async(req,res) => {
    const bookcode = req.body.bookcode;
    const bookname = req.body.bookname;
    const bookprice = req.body.bookprice;
    const bookyears = req.body.bookyears;

    const insertBookQuery = 'INSERT INTO book (bookcode,bookname,bookprice,bookyears) VALUES(?,?,?,?)';
    await useDB.query(insertBookQuery,[bookcode,bookname,bookprice,bookyears]);

    return res.render('list');
};

module.exports = {listView}