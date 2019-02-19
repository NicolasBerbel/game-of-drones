import React, { Component } from 'react';

class Scores extends Component {
  render() {
    return (
    <div className="scores">
      {!!this.props.rounds.length && <h4>Scores</h4>}
      {this.props.rounds.map((round) => {
        return (
          <div key={round.round}>
          Round {round.round} | {round.winner ? this.props.players[ round.winner ].name : 'Draw :|'}
          </div>
        );
      })}
    </div>
    );
  }
}

export default Scores;
