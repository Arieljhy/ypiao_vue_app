const mysql = require('mysql');
var pool = mysql.createPool({
   host:'localhost',
    port:'3306',
    user:'root',
    password:'jihongyu1',
    database:'ypiao',
    connectionLimit:20
});
module.exports = pool;