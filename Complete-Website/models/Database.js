var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '',
    port: '',
    user     : '',
    password : ''
});

exports.getConnection = function() {
    console.log("Get connection: "+pool)
    return pool;
};
