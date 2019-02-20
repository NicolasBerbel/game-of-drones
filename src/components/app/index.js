import React, { Component } from 'react';
import GameContainer from '../../containers/game';
import RegisterContainer from '../../containers/register';
import StatisticsContainer from '../../containers/statistics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatisticsContainer />
        {(this.props.game.started && <GameContainer />) || <RegisterContainer />}
      </div>
    );
  }
}

export default App;
