var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var app = express();

var db = mongoose.connect('mongodb://localhost/zips-dev')

app.use(express.static(path.normalize(__dirname + '/../client')));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connection.on('error', function(err){
    console.error('Error con la conexion de MongoDB' + err);
    process.exit(-1);
});

mongoose.connection.once('open', function(){
    console.log('Todo bien con MongoDB');
});

require('./routes')(app);

app.listen(3000,function(){
    console.log('Servidor corriento en el puero 3000');
});