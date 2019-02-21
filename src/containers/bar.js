// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/bar';
import state from '../state';

const mapStateToProps = (state) => {
  // const {games, localGames, modalActive } = state.bar;
  // return {
  //   games,
  //   localGames,
  //   modalActive
  // };
  return {};
}

const { toggleStatisticsModal } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatisticsModal: ( e ) => dispatch(toggleStatisticsModal( e )),
  };
}

const BarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bar);

export default BarContainer;