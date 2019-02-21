import React, { Component } from 'react';
import Round from './round';
import Scores from './scores';
import WinnerMessage from './winner-message';

class Game extends Component {
  shouldComponentUpdate(props) {
    if ( props.game.finished ) {
      props.addGameToLocalStatistics(props.game);
    } else if (props.game.winner) {
      props.endGame( props.game );
    }
    return true;
  }

  componentWillUnmount() {
  }

  render() {
    const { game, moves, players, endRound, restartGame } = this.props;
    const { finished, round, winner } = game;
    return (
      <div className="game">
        <div className="game__board">
          <div className="container-fluid">
          {
            (!finished && <>
              <h3 className="game__header">Game of Drones</h3>
              <Round {...{moves, players, round }}
                onEnd={endRound}
              />
            </> ) || (
              <WinnerMessage playAgain={restartGame} player={players[winner]}/> 
            )
          }
          </div>
        </div>
        <Scores {...{game}} />
      </div>
    );
  }
}

export default Game;
