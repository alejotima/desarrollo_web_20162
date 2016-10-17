var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));





app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/quotes',function(req,res){
    res.send('get');
});

app.listen(3000, function(){
    console.log('Lasalista server');
});