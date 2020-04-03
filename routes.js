'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);


    app.route('/tampil')
    .get(jsonku.tampilsemuauser);

    app.route('/tampil/:id')
    .get(jsonku.tampilberdasarid)

    app.route('/tambah')
        .post(jsonku.tambahUser)

    app.route('/ubah')
        .put(jsonku.ubahDataUser)

    app.route('/hapus')
        .delete(jsonku.hapusMHS)
}