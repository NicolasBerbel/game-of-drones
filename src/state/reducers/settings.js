import actions from '../actions';

const defaultState = {
  modalActive: false,
  roundsToWin: 3,
  mightReset: false,
};

let initialState = defaultState;

const localSettingsFromStorage = localStorage.getItem('settings');
if (!!localSettingsFromStorage) {
  try {
    initialState = JSON.parse(localSettingsFromStorage);
    initialState.modalActive = false;
    // initialState = JSON.parse(localSettingsFromStorage);
  } catch (e) {
    initialState = defaultState;
  }
}

export default function settings(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_SETTINGS_MODAL:
      return {
        ...state,
        modalActive: action.active,
      };
    case actions.MIGHT_RESET_SETTINGS:
      return {
        ...state,
        mightReset: true,
      };
    case actions.UPDATE_MOVES:
      const newStateMoves = {
        ...state,
        mightReset: true,
      };
      localStorage.setItem('settings', JSON.stringify(newStateMoves));

      return newStateMoves;
    case actions.RESET_SETTINGS:
      // const newState = defaultState;
      // newState.modalActive = state.modalActive;
      localStorage.removeItem('settings');

      return {
        ...defaultState,
        modalActive: state.modalActive
      };
    case actions.CHANGE_ROUNDS_TO_WIN:
      const newState = {
        ...state,
        roundsToWin: parseInt(action.roundsToWin),
        mightReset: true,
      };

      localStorage.setItem('settings', JSON.stringify(newState) );

      return newState;
    default:
      return state;
  }
};