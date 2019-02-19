import React, { Component } from 'react';
import Round from '../../components/round';
import Scores from '../../components/scores';
import WinnerMessage from '../../components/winner-message';

class Game extends Component {
  handleRoundEnd( round ) {
    const scoresData = this.computeScores(round);

    this.props.updateScores(scoresData.scores);
    this.props.endRound( round );
    
    if ( scoresData.winner ) {
      this.props.endGame({
        winner: scoresData.winner,
        players: this.props.players,
        scores: this.props.game.scores,
        rounds: this.props.game.rounds,
      });
    }
  }

  computeScores( round ) {
    const {rounds} = this.props.game;

    const scores = [...rounds, round].reduce((acc, round) => {
      if ( round.winner ) {
        acc[round.winner] = acc[round.winner] || 0;
        acc[round.winner]++;
      }

      return acc;
    }, {});

    let winner = Object.keys(scores).reduce((acc, playerId) => {
      if (scores[playerId] === this.props.settings.roundsToWin) acc = playerId;
      return acc;
    }, false);

    return {scores, winner};
  }

  render() {
    return (
    <div className="game">
      {
        (this.props.game.round !== 0 && <>
          <div>
            <h3>Game started!</h3>
            <p>Round {this.props.game.round}!</p>
          </div>
          <Round
            moves={this.props.moves}
            players={this.props.players}
            round={this.props.game.round} 
            onEnd={this.handleRoundEnd.bind(this)}
            />
          <Scores players={this.props.players} rounds={this.props.game.rounds} />
        </>
      ) || (
       <WinnerMessage playAgain={this.props.restartGame} player={this.props.players[this.props.game.winner]}/> 
      )}
    </div>
    );
  }
}

export default Game;
