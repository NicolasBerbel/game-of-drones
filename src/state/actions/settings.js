export const CHANGE_ROUNDS_TO_WIN = 'CHANGE_ROUNDS_TO_WIN';

export function changeRoundsToWin(roundsToWin) {
  return {
    type: CHANGE_ROUNDS_TO_WIN,
    roundsToWin,
  };
}