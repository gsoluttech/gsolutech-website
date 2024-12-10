const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//start application
const app = express();

const port = process.env.PORT || 8000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//routes config 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"))
})
// starts a server and listens on port 3000 for connections
app.listen(port, () => {
  console.log(`App listen to port ${port}`)
}) 

module.exports = app;
