import React, { Component } from 'react';
import { connect } from 'react-redux';
import Statistics from '../components/statistics';
import state from '../state';

const mapStateToProps = (state) => {
  const {games, localGames, modalActive } = state.statistics;
  return {
    games,
    localGames,
    modalActive
  };
}

const { fetchGames, postGames, toggleStatisticsModal } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    toggleStatisticsModal: ( e ) => dispatch(toggleStatisticsModal( e )),
    postGames: (games) => dispatch(postGames(games)),
  };
}

class StatisticsHOC extends Component {
  componentDidMount(){
    this.props.fetchGames();
  }

  render() {
    return (
      <Statistics {...this.props} />
    );
  }
}

const StatisticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatisticsHOC);

export default StatisticsContainer;