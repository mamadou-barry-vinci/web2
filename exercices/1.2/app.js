var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let liens = [];
let compteurs = [];
app.use((req, res, next) => {
    let lien = req.method +' '+req.path;
    let position = liens.indexOf(lien);

    console.log(position);
    if (position === -1){
        liens.push(lien);
        compteurs.push(1);
    }
    else{
        compteurs[position] = compteurs[position]+1
    }
    console.log("Request counter :");
    for (let i = 0; i < liens.length; i++) {
        console.log("- "+liens[i] + " : "+ compteurs[i]);;
        
    }
    // console.log("liens : "+liens);
    // console.log("compteurs : "+compteurs);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);


module.exports = app;
