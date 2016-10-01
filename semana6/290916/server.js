var express =require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

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
        author: 'Unknown',
        text: "Even the greatest was once a beginner. Don't be afraid to take that first step."
        },
    {
        id: '4',
        author: 'Neale Donald Walsch',
        text: "You are afraid to die, and you're afraid to live. What a way to exist."
        }
    ];


app.get('/api/quotes', function(req, res){
    //res.send('Lista todas las citacioes');
    res.json(quotes);
});

app.get('/api/quotes/:id', function(req, res){
    res.send('Este obtiene solo una citacion');
});

app.put('/api/quotes/:id', function(req, res){
    res.send('modificacion de una cita');
});

app.post('/api/quotes', function(req, res){
    res.send('Inserta una citacion');
});

app.delete('/api/quotes/:id', function(req, res){
    res.send('Borraria una citacion');
});

app.listen(3000, function(){
    console.log('Este es mi primer servidor en nodeJS');
});


