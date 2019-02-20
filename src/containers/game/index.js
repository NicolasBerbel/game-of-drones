import { connect } from 'react-redux';
import Game from '../../components/game';
import state from '../../state';

const mapStateToProps = (state, ownProps) => {
  const {settings, players, moves, game } = state;

  return {
    settings,
    players,
    moves,
    game,
  };
}

const { endGame, restartGame, endRound, updateScores, addGameToLocalStatistics } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    updateScores: (scores) => dispatch(updateScores(scores)),
    endRound: (round) => dispatch(endRound(round)),
    endGame: (game) => dispatch(endGame(game)),
    addGameToLocalStatistics: (game) => dispatch(addGameToLocalStatistics(game)),
    restartGame: () => dispatch(restartGame()),
  };
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;