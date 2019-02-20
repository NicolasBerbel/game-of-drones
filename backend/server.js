const routes = require('./routes');
const emits = require('./emits');

const express = require('express');
const port = process.env.APP_PORT || 80;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.static('./build'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

Object.keys(routes).forEach(id => {
  const routeFn = routes[id];
  if ( Array.isArray(routeFn) ) {
    routeFn.forEach((route) => route(app))
  } else {
    routes[id](app)
  }
});

Object.keys(emits.io).forEach(id => {
  const emitFn = emits[id];
  if (Array.isArray(emitFn)) {
    emitFn.forEach((emit) => emit(io))
  } else {
    emits.io[id](io)
  }
});

function startServer() {
  return new Promise((resolve, reject) => {
    server.listen(port, ( err ) => {
      if ( err ) return reject( err );
      console.info(`Server running on port ${port}`);
      resolve();
    });
    
    io.on('connection', function (socket) {
      Object.keys(emits.socket).forEach(id => {
        const emitFn = emits[id];
        if (Array.isArray(emitFn)) {
          emitFn.forEach((emit) => emit(socket))
        } else {
          emits.socket[id](socket)
        }
      });
    });
  });  
}


module.exports = {
  app,
  io,
  startServer,
};