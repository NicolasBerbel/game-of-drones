import actions from '../actions';

const initialState = {
  roundsToWin: 3,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_ROUNDS_TO_WIN:
      let {roundsToWin} = action;
      return {
        ...state,
        roundsToWin,
      };
    default:
      return state;
  }
};