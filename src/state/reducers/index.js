import { combineReducers } from 'redux'
import players from './players';
import moves from './moves';
import settings from './settings';
import games from './games';
import game from './game';

export const reducers = combineReducers({
  // debug: (state = {}, action) => {
  //   console.log( state, action );
  //   return state;
  // },
  players,
  moves,
  settings,
  games,
  game,
});