import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppShell from './components/app-shell';

const rootElement = document.getElementById('root');

ReactDOM.render(<AppShell/>, rootElement);

if (module.hot) {
  module.hot.accept('./components/app-shell', () => {
    const NextApp = require('./components/app-shell').default;
    ReactDOM.render(<NextApp />, rootElement)
  })
}