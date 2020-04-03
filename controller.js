'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("My app RestApi work", res)
};


//tampil data di tbl_user
exports.tampilsemuauser = function (req, res) {
    connection.query('SELECT * FROM tbl_user', function (error, rows, fields) {
        if (error) {
            console.log(error);
        }
        else {
            response.ok(rows, res)
        }
    });
};


//tampil data di tbl_user berdasar 
exports.tampilberdasarid = function (req, res) {

    let id = req.params.id;
    connection.query('SELECT * FROM tbl_user WHERE id=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                response.ok(rows, res)
            }

        });
};

//tambahkan data tbl_user
exports.tambahUser = function (req, res) {

    var fullname = req.body.fullname;
    var email = req.body.email;
    var location = req.body.location;
    var username = req.body.username;
    var password = req.body.password;

    connection.query('INSERT INTO tbl_user (fullname,email,location,username,password) VALUES(?,?,?,?,?)',
        [fullname, email, location, username, password],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambah Data", res)
            }
        });
};

//
//mengubah data name/u/p berdasarkan nim

exports.ubahDataUser = function (req, res) {
    
    var nim = req.body.nim;
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;

    connection.query('UPDATE tbl_user SET fullname=?, username=?, password=? WHERE nim=?', [ fullname, username, password, nim],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus ubah User", res)
            }
        });
}

// DELETE DATA
exports.hapusMHS = function(req,res){
    var nim = req.body.nim;
    connection.query('DELETE FROM tbl_user WHERE nim=?',[nim],
    function (error, rows, fields) 
    {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data User", res)
        }
    });
}