import actions from '../actions';

const initialState = {
  paper: {
    'name': 'Paper',
    'wins': 'rock'
  },
  rock: {
    'name': 'Rock',
    'wins': 'scissor'
  },
  scissor: {
    'name': 'Scissor',
    'wins': 'paper'
  },
  hulk: {
    'name': 'Hulk',
    'wins': 'paper'
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