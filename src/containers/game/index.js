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

const { endGame, addGame, restartGame, endRound, updateScores } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    endGame: (game) => dispatch(endGame(game)) && dispatch(addGame(game)),
    restartGame: () => dispatch(restartGame()),
    endRound: (round) => dispatch(endRound(round)),
    updateScores: (scores) => dispatch(updateScores(scores)),
  };
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;