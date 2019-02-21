import actions from '../actions';

const initialState = {
  started: false,
  startedAt: null,
  finished: false,
  finishedAt: null,
  round: 1,
  players: {},
  winner: null,
  scores: {},
  rounds: [],
};

function computeScores( rounds ) {
  const initialScores = Object.keys(rounds[0].moves).reduce( (acc, player) => {
    acc[player] = 0;
    return acc;
  }, {});

  const scores = rounds.reduce((acc, round) => {
    if (round.winner) {
      acc[round.winner] = acc[round.winner] || 0;
      acc[round.winner]++;
    }

    return acc;
  }, initialScores);

  return scores;
}

function checkWinner( scores, roundsToWin ) {
  return Object.keys(scores).reduce((acc, playerId) => {
    if (scores[playerId] === roundsToWin) acc = playerId;
    return acc;
  }, false);
}

export default function game(state = initialState, action) {
  switch (action.type) {
    case actions.START_GAME:
      return {
        ...state,
        started: true,
        startedAt: new Date().getTime(),
        players: action.players
      };
    case actions.END_GAME:
      return {
        ...state,
        finished: true,
        finishedAt: new Date().getTime(),
        winner: action.game.winner
      };
    case actions.RESTART_GAME:
      return initialState;
    case actions.END_ROUND:
      const rounds = [
        ...state.rounds,
        action.round,
      ];
      const scores = computeScores( rounds );
      const winner = checkWinner( scores, 3 );

      const game = {
        ...state,
        rounds,
        scores,
        winner,
      };

      if ( !winner ) game.round = state.round + 1;

      return game;
    case actions.UPDATE_SCORES:
      return {
        ...state,
        scores: action.scores,
      };
    default:
      return state;
  }
};