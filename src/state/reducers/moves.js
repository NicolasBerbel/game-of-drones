import actions from '../actions';

const defaultState = {
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
};

let initialState = defaultState;

const localMovesFromStorage = localStorage.getItem('moves');
if (!!localMovesFromStorage) {
  try {
    initialState = JSON.parse(localMovesFromStorage);
  } catch (e) {
    initialState = defaultState;
  }
}

export default function moves(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_MOVES:
      const newState = {
        ...state,
        ...action.moves,
      };
      
      localStorage.setItem('moves', JSON.stringify(newState))
      return newState;
    case actions.RESET_SETTINGS:
      localStorage.removeItem('moves');
      return defaultState;
    default:
      return state;
  }
};