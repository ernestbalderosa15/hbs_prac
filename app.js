var createError = require('http-errors');  // Line 1
var express = require('express');          // Line 2
var path = require('path');                // Line 3
var cookieParser = require('cookie-parser'); // Line 4
var logger = require('morgan');            // Line 5
var hbs = require('hbs');                  // Line 6
var indexRouter = require('./routes/index'); // Line 7
var usersRouter = require('./routes/users'); // Line 8

var indexRouter = require('./routes/index');

var app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => {});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;