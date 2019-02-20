import {store} from './store';
import {actions} from './actions';
import io from 'socket.io-client';
const socket = io.connect('http://localhost');

socket.on('game:added', (game) => {
  store.dispatch(actions.socketGameAdded(game));
});

export default socket;