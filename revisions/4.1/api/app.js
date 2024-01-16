
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions= {
    origin: ['http://localhost:8080','http://localhost:666','http://localhost:7000']
}

const filmsRouter = require('./routes/films');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/films', cors(corsOptions),filmsRouter);
app.use('/users', usersRouter);

module.exports = app;
