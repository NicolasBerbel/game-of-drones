import React, { Component } from 'react';
import Round from '../../components/round';
import Scores from '../../components/scores';
import WinnerMessage from '../../components/winner-message';

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
    return (
      <div className="game">
        {
          (!this.props.game.finished &&
          <>
            <div>
              <h3>Game started!</h3>
              <p>Round {this.props.game.round}!</p>
            </div>
            <Round
              moves={this.props.moves}
              players={this.props.players}
              round={this.props.game.round} 
              onEnd={this.props.endRound}
              />
            <Scores players={this.props.players} rounds={this.props.game.rounds} />
          </>
          ) || (
          <WinnerMessage playAgain={this.props.restartGame} player={this.props.game.players[this.props.game.winner]}/> 
          )
        }
      </div>
    );
  }
}

export default Game;
