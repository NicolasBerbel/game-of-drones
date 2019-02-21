import { connect } from 'react-redux';
import Register from '../components/register';
import state from '../state';

const mapStateToProps = (state) => {
  const {players, moves} = state;

  return {
    players,
    moves
  };
}

const { editPlayer, startGame } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    editPlayer: (id, name) => dispatch(editPlayer(id, name)),
    startGame: (game) => dispatch(startGame(game)),
  };
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;