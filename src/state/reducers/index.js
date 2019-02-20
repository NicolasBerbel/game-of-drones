import { combineReducers } from 'redux'
import players from './players';
import moves from './moves';
import settings from './settings';
import game from './game';
import statistics from './statistics';

export const reducers = combineReducers({
  debug: (state = {}, action) => {
    // console.log( state, action );
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