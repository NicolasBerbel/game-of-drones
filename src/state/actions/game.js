export const START_GAME = 'START_GAME';
export function startGame( game ) {
  return {
    type: START_GAME,
    players: game.players,
    moves: game.moves,
  };
}

export const END_GAME = 'END_GAME';
export function endGame( game ) {
  return {
    type: END_GAME,
    game
  };
}

export const RESTART_GAME = 'RESTART_GAME';
export function restartGame() {
  return {
    type: RESTART_GAME,
  };
}

export const END_ROUND = 'END_ROUND';
export function endRound( round ) {
  return {
    type: END_ROUND,
    round
  }
}
export const UPDATE_SCORES = 'UPDATE_SCORES';
export function updateScores(scores) {
  return {
    type: UPDATE_SCORES,
    scores
  }
}