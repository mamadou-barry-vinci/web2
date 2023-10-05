/* eslint-disable no-plusplus */
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const filmsRouter = require('./routes/films');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const liens = [];
const compteurs = [];
app.use((req, res, next) => {
    const lien = `${req.method } ${req.path}`;
    const position = liens.indexOf(lien);

    console.log(position);
    if (position === -1){
        liens.push(lien);
        compteurs.push(1);
    }
    else{
        // eslint-disable-next-line operator-assignment
        compteurs[position] = compteurs[position]+1
    }
    console.log("Request counter :");
    for (let i = 0; i < liens.length; i++) {
        console.log(`- ${liens[i]  } : ${ compteurs[i]}`);;
        
    }
    // console.log("liens : "+liens);
    // console.log("compteurs : "+compteurs);
    next();
});

app.use('/users', usersRouter);
app.use('/films', filmsRouter);


module.exports = app;
