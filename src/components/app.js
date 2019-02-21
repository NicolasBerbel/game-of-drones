import React, { Component } from 'react';
import GameContainer from '../containers/game';
import RegisterContainer from '../containers/register';
import Bar from './bar';
import StatisticsContainer from '../containers/statistics';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Bar />
        <StatisticsContainer />
        <div className="container">
          <div className="screen">
            {(this.props.game.started && <GameContainer />) || <RegisterContainer />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
