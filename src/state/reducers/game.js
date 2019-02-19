import { actions } from '../actions';

const initialState = {
  started: false,
  round: 0,
  players: {},
  winner: null,
  scores: {},
  rounds: [],
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case actions.START_GAME:
      return {
        ...state,
        started: true,
        round: 1,
        players: action.players
      };
    case actions.END_GAME:
      return {
        ...state,
        ...action.game,
        round: 0,
      };
    case actions.RESTART_GAME:
      return initialState;
    case actions.END_ROUND:
      return {
        ...state,
        round: state.round + 1,
        rounds: [
          ...state.rounds,
          action.round,
        ],
      };
    case actions.UPDATE_SCORES:
      return {
        ...state,
        scores: action.scores,
      };
    default:
      return state;
  }
};