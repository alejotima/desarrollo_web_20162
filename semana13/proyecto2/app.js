var express =require('express');
var bodyParser = require('body-parser');
var path = require('path')
var morgan = require('morgan')
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

var quotes = [
    {
        id: '1',
        author: 'Audrey Hepburn',
        text: "Nothing is impossible, the word itself says 'I'm possible'!"
        },
    {
        id: '2',
        author: 'Walt Disney',
        text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
        },
    {
        id: '3',
        author: 'Yarce',
        text: "Even the greatest was once a beginner. Don't be afraid to take that first step."
        },
    {
        id: '4',
        author: 'Neale Donald Walsch',
        text: "You are afraid to die, and you're afraid to live. What a way to exist."
        }
    ];

app.get('/', function(req, res){
    //res.send('hello world!!');
    //res.json(quotes);
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Este endpoint devuelve todas las citaciones
app.get('/api/quotes', function(req, res){
    //res.send('Lista todas las citacioes');
    res.json(quotes);
});

app.get('/api/quotes/:id', function(req, res){
    res.send('Este obtiene solo una citacion');
});

app.put('/api/quotes/:id', function(req, res){
    console.log(req.body);
    for(index = 0; index<quotes.length;++index){
        console.log(index);
        if(quotes[index].id===req.params.id){
            console.log('el elemento es');
            console.log(quotes[index]);
            quotes[index] = req.body;
            return false;
        }
    }
    res.json(true);
});

app.post('/api/quotes', function(req, res){
    console.log(req.body);
    if(!req.body.hasOwnProperty('author')||!req.body.hasOwnProperty('text')){
        res.statusCode=400;
        return res.send('Error 400: Quote incorrecta');
    }
    var newQuote = {
        id: (parseInt(quotes[quotes.length-1].id)+1).toString(),
        author: req.body.author,
        text: req.body.text
        
    };
    quotes.push(newQuote);
    console.log(quotes);
    res.json(true);
});

app.delete('/api/quotes/:id', function(req, res){
    var index;
    for(index = 0; index<quotes.length;++index){
        console.log(index);
        if(quotes[index].id===req.params.id){
            console.log('entro a el igual')
            quotes.splice(index,1);
            return false;
        }
    }
    res.json(true);
});

app.listen(3000, function(){
    console.log('Este es mi primer servidor en nodeJS');
});