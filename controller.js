'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("My app RestApi work",res)
};


//tampil data di tbl_user
exports.tampilsemuauser = function(req,res){
    connection.query('SELECT * FROM tbl_user', function(error, rows, fields){
        if(error){
            console.log(error);
        }
        else
        {
            response.ok(rows, res)
        }
    });
};


//tampil data di tbl_user berdasar 
exports.tampilberdasarid = function(req,res)
{
    
        let id = req.params.id;
        connection.query('SELECT * FROM tbl_user WHERE id=?',[id],
         function(error, rows, fields){
            if(error){
                console.log(error);
            }
            else
            {
                response.ok(rows, res)
            }
            
    });
};

//tambahkan data tbl_user
exports.tambahUser = function (req, res)
{

    var fullname = req.body.fullname;
    var email = req.body.email;
    var location =req.body.location;
    var username =req.body.username;
    var password =req.body.password;

    connection.query('INSERT INTO tbl_user (fullname,email,location,username,password) VALUES(?,?,?,?,?)',
[fullname,email,location,username,password],
        function (error,rows,fields){
            if(error){
        console.log(error);
           }else{
        response.ok("Berhasil menambah Data",res)
        }
    });
};

