import { actions } from '../actions';

const initialState = {
  player1: {
    title: 'Player 1',
    name: ''
  },
  player2: {
    title: 'Player 2',
    name: ''
  },
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case actions.EDIT_PLAYER:
      const { id, name } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          name
        },
      };
    default:
      return state;
  }
};