var express = require('express');
var mongoose = require ('mongoose');
var app = express();

app.get('/', function(req, res){
    res.send('siiiiiiiiiiiii se conecto');
    
});

app.listen(27017);
console.log('Servidor Express escuchando en puerto 27017');