const { db } = require('../firebase');
const gamesRef = db.ref('games');

module.exports = {
  io: (io) => {
    gamesRef.orderByChild('createdOn')
      .startAt(Date.now())
      .on('child_added', snapshot => {
        io.emit('game:added', {
          [snapshot.key]: snapshot.val()
        });
      });
  },
  socket: (socket) => {

  },
}