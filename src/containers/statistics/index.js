import React, { Component } from 'react';
import { connect } from 'react-redux';
import Statistics from '../../components/statistics';
import state from '../../state';

const mapStateToProps = (state) => {
  const {games, localGames} = state.statistics;
  return {
    games,
    localGames
  };
}

const { fetchGames, postGames } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames()),
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