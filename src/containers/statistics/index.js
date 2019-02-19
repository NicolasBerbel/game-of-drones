import { connect } from 'react-redux';
import Statistics from '../../components/statistics';

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
}

const StatisticsContainer = connect(
  mapStateToProps,
)(Statistics);

export default StatisticsContainer;