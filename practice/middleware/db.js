const mysql = require('mysql2/promise'); //비동기적

const useDB = mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"0000",
    database:"book",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = useDB;