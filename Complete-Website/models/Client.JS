const database = require('./Database');

exports.searchClients = async function (req, res, callback) {
    var id = "%"+req.query.id+"%";
    database.getConnection().query("SELECT * FROM utenti.clienti WHERE LOWER(nome) like LOWER(?) LIMIT 100; ", id, function (err, rows) {
        res.json(rows);
    })
}

exports.addClient = async function (req, res, callback) {
    var name = req.body.name;
    var address = req.body.address;
    var username = req.body.username;
    var password =  req.body.password;
    console.log("Info: "+name+address+username+password);
    database.getConnection().query("INSERT INTO utenti.clienti (Nome, Indirizzo, username, passwordCliente) VALUES (?,?,?,?)", [name, address, username, password], function (err, rows) {
        if (err != undefined) {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200);
        }
    })
}
