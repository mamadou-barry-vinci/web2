var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rajout de ces lignes pour changer le port (de base il est à 3000)
const PORT = 678;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
