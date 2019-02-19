export const ADD_MOVE = 'ADD_MOVE';
export function addMove(move) {
  return {
    type: ADD_MOVE,
    move,
  };
}

export const REMOVE_MOVE = 'REMOVE_MOVE';
export function removeMove(move) {
  return {
    type: REMOVE_MOVE,
    move,
  };
}
