import React, { Component } from 'react';
import Round from './Round';
import Scores from './Scores';
import WinnerMessage from './WinnerMessage';

class Game extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      winner: false,
      roundStarted: true,
      round: 1,
      rounds: [],
      scores: {}
    }
  }

  handleRoundEnd( roundData ) {
    const rounds = [
      ...this.state.rounds,
      roundData,
    ];

    this.setState({
      round: this.state.round + 1,
      rounds,
    }, () => {
      this.computeScores();
    });
  }

  onPlayAgain(){
    this.props.onRestart();
  }

  computeScores() {
    const {rounds} = this.state;
    const {settings} = this.props;

    const scores = rounds.reduce((acc, round) => {
      if ( round.winner ) {
        acc[round.winner] = acc[round.winner] || 0;
        acc[round.winner]++;
        if (acc[round.winner] === settings.roundsToWin) {
          this.setWinner( round.winner );
        };
      }

      return acc;
    }, {});

    return scores;
  }

  setWinner( player ) {
    this.setState({
      winner: player,
      roundStarted: false,
    });
  }

  render() {
    const { settings } = this.props;

    return (
    <div className="game">
      {
        (this.state.roundStarted && <>
          <div>
            <h3>Game started!</h3>
            <p>Round {this.state.round}!</p>
          </div>
          <Round
            moves={settings.moves}
            players={this.props.players}
            round={this.state.round}
            onEnd={this.handleRoundEnd.bind(this)}
            />
          <Scores players={this.props.players} rounds={this.state.rounds} />
        </>
      ) || (
       <WinnerMessage playAgain={this.onPlayAgain.bind(this)} player={this.props.players[this.state.winner]}/> 
      )}
    </div>
    );
  }
}

export default Game;
