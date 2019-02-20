const games = require('./games');

module.exports = {
  io: {
    games: games.io,
  },
  socket: {
    games: games.socket,
  }
};