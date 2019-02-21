import { connect } from 'react-redux';
import Settings from '../components/settings';
import state from '../state';

const mapStateToProps = (state) => {
  const { modalActive, roundsToWin, mightReset } = state.settings;
  return {
    moves: state.moves,
    roundsToWin,
    modalActive,
    mightReset
  };
}

const { toggleSettingsModal, changeRoundsToWin, updateMoves, resetSettings } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    changeRoundsToWin: ( value ) => dispatch(changeRoundsToWin( value )),
    toggleSettingsModal: ( toggle ) => dispatch(toggleSettingsModal( toggle )),
    updateMoves: ( moves ) => dispatch(updateMoves( moves )),
    resetSettings: () => dispatch(resetSettings()),
  };
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;