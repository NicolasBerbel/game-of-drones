const firebase = require('firebase-admin');
const serviceAccount = require('./keys/serviceAccountKey.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://fir-b05a6.firebaseio.com"
});

module.exports = {
  firebase,
  db: firebase.database(),
};