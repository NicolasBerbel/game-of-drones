import { combineReducers } from 'redux'
import players from './players';
import moves from './moves';
import settings from './settings';
import game from './game';
import statistics from './statistics';

const reducers = combineReducers({
  debug: (state = {}, action) => {
    return {
      ...state,
      [new Date().getTime()]: action,
    };
  },
  players,
  moves,
  settings,
  game,
  statistics,
});

export default reducers;