import React from 'react';
import { Provider } from 'react-redux'
import AppContainer from '../containers/app';
import state from '../state';

window.state = state;

export default () => {
  return (
    <Provider store={state.store}>
      <AppContainer />
    </Provider>
  );
};