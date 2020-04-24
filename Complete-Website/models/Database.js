var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    port: '3306',
    user     : 'root',
    password : 'YourPassword' 
});

exports.getConnection = function() {
    console.log("Get connection: "+pool)
    return pool;
};
