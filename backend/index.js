const {startServer} = require('./server');

startServer()
  .then( () => console.log('Server initialization finished') )
  .catch( err => console.error('err') && process.exit(1) );