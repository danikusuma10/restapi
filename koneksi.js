var mysql = require('mysql');

//koneksi db
const conn = mysql.createConnection({
    host:'206.189.94.93',
    user:'progclas_dani',
    password:'embossy1!',
    database:'progclas_dani'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;