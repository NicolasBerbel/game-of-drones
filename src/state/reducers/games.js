import { actions } from '../actions';

const initialState = {};

export default function games(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_GAME:
      return {
        ...state,
        [new Date().getTime()]: action.game,
      };
    default:
      return state;
  }
};