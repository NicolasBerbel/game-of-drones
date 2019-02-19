export const ADD_GAME = 'ADD_GAME';

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
  };
}