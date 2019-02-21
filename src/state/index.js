import actions from './actions';
import reducers from './reducers';
import store from './store';
import socket from './socket';

export default {
  actions,
  reducers,
  store,
  socket,
  get state() {
    return store.getState();
  }
};