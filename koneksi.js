var mysql = require('mysql');

//koneksi db
const conn = mysql.createConnection({
    host:'',
    user:'',
    database:''
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;