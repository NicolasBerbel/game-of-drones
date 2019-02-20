const { db } = require('../firebase');
const asyncRoute = require('../helpers/async-route');

const gamesRef = db.ref('games');

module.exports = [
  (app) => app.get('/games', asyncRoute(async (req, res) => {
    gamesRef.orderByChild('createdOn').limitToLast(10).once('value', (snapshot) => {
      return res.json( snapshot.val() );
    });
  })),
  (app) => app.post('/games', asyncRoute(async (req, res) => {
    const timestamp = new Date().getTime();
    const ip = req.ip;

    const updates = Object.values(req.body).reduce( (acc, game) => {
      acc[gamesRef.push().key] = {
        ip,
        createdOn: timestamp,
        ...game
      };

      return acc;
    }, {});

    try {
      gamesRef.update( updates );

      return res.json( req.body );
    } catch (error) {
      res.status(500);
      res.json({
        status: 500,
        message: 'Internal server error, try again in a few moments',
      });
    }

  }))
]
