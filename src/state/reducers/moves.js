import { actions } from '../actions';

const initialState = {
  scissor: {
    'name': 'Scissor',
    'wins': 'paper'
  },
  paper: {
    'name': 'Paper',
    'wins': 'rock'
  },
  rock: {
    'name': 'Rock',
    'wins': 'scissor'
  },
};

export default function moves(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MOVE:
      return state;
    default:
      return state;
  }
};