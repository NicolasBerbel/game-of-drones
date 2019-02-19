import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import AppContainer from './containers/app';
import state from './state';

ReactDOM.render(
  <Provider store={state.store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);