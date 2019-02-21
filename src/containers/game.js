import { connect } from 'react-redux';
import Game from '../components/game';
import state from '../state';

const mapStateToProps = (state, ownProps) => {
  const {settings, players, moves, game } = state;

  return {
    settings,
    players,
    moves,
    game,
  };
}

const { endGame, restartGame, endRound, updateScores, addGameToLocalStatistics, toggleStatisticsModal } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    updateScores: (scores) => dispatch(updateScores(scores)),
    endRound: (round, roundsToWin) => dispatch(endRound(round, roundsToWin)),
    endGame: (game) => dispatch(endGame(game)),
    addGameToLocalStatistics: (game) => dispatch(addGameToLocalStatistics(game)),
    toggleStatisticsModal: () => dispatch(toggleStatisticsModal(true)),
    restartGame: () => dispatch(restartGame()),
  };
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;