import * as players from './players';
import * as moves from './moves';
import * as settings from './settings';
import * as games from './games';
import * as game from './game';

export const actions = {
  ...moves,
  ...players,
  ...settings,
  ...games,
  ...game,
};