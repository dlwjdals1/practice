const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//라우터 추가
const mainRouter = require('./routes/mainRouter');
const joinRouter = require('./routes/joinRouter');
const loginRouter = require('./routes/loginRouter');
const listRouter = require('./routes/listRouter');
const userRouter = require('./routes/userRouter');
const bookaddRouter = require('./routes/bookaddRouter');
const { loginView } = require('./controller/loginController');
const { join } = require('./controller/joinController');
const { list } = require('./controller/listController');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//라우터 추가
app.use('/', mainRouter);
app.use('/join', joinRouter);
app.use('/login', loginRouter);
app.use('/list', listRouter);
app.use('/user', userRouter);
app.use('/bookadd', bookaddRouter);

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
  console.log(err.message)
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
