import { connect } from 'react-redux';
import App from '../../components/app';

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
}

const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;