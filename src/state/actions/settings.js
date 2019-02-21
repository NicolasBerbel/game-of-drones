export const CHANGE_ROUNDS_TO_WIN = 'CHANGE_ROUNDS_TO_WIN';
export function changeRoundsToWin(roundsToWin) {
  return {
    type: CHANGE_ROUNDS_TO_WIN,
    roundsToWin,
  };
}

export const TOGGLE_SETTINGS_MODAL = 'TOGGLE_SETTINGS_MODAL';
export function toggleSettingsModal(active = false) {
  return {
    type: TOGGLE_SETTINGS_MODAL,
    active
  }
}

export const RESET_SETTINGS = 'RESET_SETTINGS';
export function resetSettings() {
  return {
    type: RESET_SETTINGS,
  }
}

export const MIGHT_RESET_SETTINGS = 'MIGHT_RESET_SETTINGS';
export function mightResetSettings() {
  return {
    type: MIGHT_RESET_SETTINGS,
  }
}
