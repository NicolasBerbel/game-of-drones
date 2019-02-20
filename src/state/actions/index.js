import * as players from './players';
import * as moves from './moves';
import * as settings from './settings';
import * as game from './game';
import * as statistics from './statistics';

export const actions = {
  ...moves,
  ...players,
  ...settings,
  ...game,
  ...statistics,
};