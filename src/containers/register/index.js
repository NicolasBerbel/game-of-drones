import { connect } from 'react-redux';
import Register from '../../components/register';
import state from '../../state';

const mapStateToProps = (state) => {
  const {players} = state;

  return {
    players,
  };
}

const { editPlayer, startGame } = state.actions;
const mapDispatchToProps = (dispatch) => {
  return {
    editPlayer: (id, name) => dispatch(editPlayer(id, name)),
    startGame: (players) => dispatch(startGame(players)),
  };
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;