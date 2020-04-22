const database = require('./Database');

exports.searchClients = async function (req, res, callback) {
    var id = "%"+req.query.id+"%";
 
}

exports.addClient = async function (req, res, callback) {
    var name = req.body.name;
    var address = req.body.address;
    var username = req.body.username;
    var password =  req.body.password;
    console.log("Info: "+name+address+username+password);
    
}
