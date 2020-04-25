const database = require('./Database');

exports.getSales = async function (req, res, callback) {
    var returnString = "";
    console.log("Get sales");

    database.getConnection().query("SELECT * FROM vendite.vendita ORDER BY DataVendita DESC LIMIT 100 ; ", function (err, rows) {
        res.json(rows);
    })
}

exports.getSalesChartInfo = async function (req, res, callback) {
    var returnString = "";
    console.log("Get sales");
    database.getConnection().query("SELECT SUM(importo) as guadagnoGiorno,  DATE(vendite.vendita.DataVendita) as data FROM vendite.pagamenti INNER JOIN vendite.vendita ON vendite.pagamenti.idVendita = vendite.vendita.id group by DATE(vendite.vendita.DataVendita)", function (err, rows) {
        res.json(rows);
    })
}

exports.getSalesDates = async function (req, res, callback) {
    var returnString = "";
    console.log("Get sales");

    database.getConnection().query("SELECT DISTINCT DATE(vendite.vendita.DataVendita) as data FROM vendite.pagamenti INNER JOIN vendite.vendita", function (err, rows) {
        res.json(rows);
    })
}


exports.deleteSale = async function (req, res, callback) {
    const id = req.body.id;
    console.log(id);
    database.getConnection().query("DELETE FROM vendite.vendita WHERE id=?", id, function (err, rows) {
        if (err != undefined) {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200);
        }
    })
}