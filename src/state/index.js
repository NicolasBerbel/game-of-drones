import { actions } from './actions';
import { reducers } from './reducers';
import { store } from './store';

export default {
  actions,
  reducers,
  store,
  get() {
    return store.getState();
  }
};