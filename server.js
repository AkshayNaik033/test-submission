var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var form = require('./routes/form');
var auth = require('./routes/auth');

var app = express();

const port = 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/form',form);
app.use('/api',auth);

app.listen(port,(err,res)=>{
    console.log("listening on port: "+ port)
})