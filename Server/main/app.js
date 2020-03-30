var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes')

var app = express();
app.use(logger('dev'));
indexRouter.checkDataBaseState();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: process.env.FRONT_URL
}))

app.use('/', indexRouter.router)

module.exports = app;


