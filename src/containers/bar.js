// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/bar';
import state from '../state';

const mapStateToProps = (state) => {
  return {
    game: state.game
  };
}

const { toggleStatisticsModal, toggleSettingsModal, restartGame } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatisticsModal: ( e ) => dispatch(toggleStatisticsModal( e )),
    toggleSettingsModal: ( e ) => dispatch(toggleSettingsModal( e )),
    restartGame: () => dispatch(restartGame()),
  };
}

const BarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bar);

export default BarContainer;