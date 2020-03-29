'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("My app RestApi work",res)
};


//tampil data di db
exports.tampilsemuauser = function(req,res){
    connection.query('SELECT * FROM tbl_user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }
        else
        {
            response.ok(rows, res)
        }
    });
};