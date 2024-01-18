const useDB = require('../middleware/db');

const listView = async(req,res) => {
    let viewQuery = 'SELECT * FROM book';
    const book = await useDB.query(viewQuery);
    console.log(book);
    return res.render('listView', {bookdata: book[0]});
};

// const listView = async(req,res) => {
//     let viewQuery = 'SELECT * FROM user';
//     const user = await useDB.query(viewQuery);
    
//     viewQuery = 'SELECT * FROM book'
//     const book = await useDB.query(viewQuery);
//     console.log(user);
//     console.log(book);
//     return res.render('listView', {data:user[0], bookdata: book[0]});
// };


    const list = async (req,res) => {
        const booknum = req.body.booknum;
        const bookcode = req.body.bookcode;
        const bookname = req.body.bookname;
        const bookprice = req.body.bookprice;
        const bookyears = req.body.bookyears;

        const insertBookQuery = 'INSERT INTO book (bookcode,bookname,bookprice,bookyears) VALUES(?,?,?,?)';
        await useDB.query(insertBookQuery,[bookcode,bookname,bookprice,bookyears]);

        return res.render('listView')
    };

module.exports = {listView, list}