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


router.post('/login', (req, res, next) => {
    MongoClient.connect(url, (err, database) => {
        var query = { 'email': req.body.email,'pwd':req.body.pwd };
        const myDB = database.db('testdb')
        myDB.collection('test', function (err, collection) {
            collection.findOne(query,function (err, items) {
                if(items)
                res.send(true);
            });
        });
        database.close();
    });
})


router.get('/test', (req, res, next) => {
    res.send({"1":"Hi"})    
})




module.exports = router;