const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser')
const session = require("express-session")
const mongoStore = require('connect-mongo')(session);
const helmet = require('helmet')
const compression = require('compression')

require('./config/db')
const config = require('./config')

// backend routes
const sd_map = require('./routes/sd_map');
const sgg_map = require('./routes/sgg_map');

app.use(function(req, res, next) {
  const allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3001', 'http://0.0.0.0:3001', 'http://localhost:3001', "https://sgisapi.kostat.go.kr"];
  const origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', true);
  }
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token");

  next();
});
app.use(compression())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
  secret: '비밀번호',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({
    url: config.db_path,
    autoRemove: 'native',
  })
}))

app.use(helmet({
  frameguard: {
    action: 'sameorigin'
  }
}))

app.use('/v1/sd_map', sd_map);
app.use('/v1/sgg_map', sgg_map);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if(app.get('env') == "development") {
  app.listen(3000);
}

module.exports = app;