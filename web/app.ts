import {Request, Response, NextFunction} from "express";
import {CompletionDec} from "comp-dec";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');

var app = express();

import idiomDB from './server/database';
idiomDB.connect().then(async () => {

  await idiomDB.fetchAllEntries();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // routing materilze-css css
  app.use('/dist-css/materialize', express.static(path.join(__dirname, 'node_modules/materialize-css/dist/css')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/search', searchRouter);

  // catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
  });

  // error handler
  app.use(function (err: CompletionDec.Error, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

});

module.exports = app;


