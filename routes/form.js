var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdb";

router.get('/form_data', (req, res, next) => {
    MongoClient.connect(url, (err, database) => {

        const myDB = database.db('testdb')
        myDB.collection('test', function (err, collection) {
            collection.find().toArray(function (err, items) {

                res.send(items);
            });
        });
        database.close();
    });
})


router.post('/form_data', (req, res, next) => {
    var task = req.body;
    MongoClient.connect(url, (err, database) => {

        const myDB = database.db('testdb')
        myDB.collection('test', function (err, collection) {
            collection.save(task, function (err, item) {
                if (err) res.send(err);
                res.send(item);
            });
        });
        database.close();
    });
})



module.exports = router;