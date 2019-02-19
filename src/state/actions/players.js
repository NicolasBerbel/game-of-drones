export const EDIT_PLAYER = 'EDIT_PLAYER';

export function editPlayer(id, name) {
  return {
    type: EDIT_PLAYER,
    id,
    name,
  };
}