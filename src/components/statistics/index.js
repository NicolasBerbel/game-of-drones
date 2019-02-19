import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        {Object.keys(this.props.games).map( (timestamp, idx) => {
          const game = this.props.games[ timestamp ];
          const winner = game.players[game.winner];
          const index = idx + 1;
          return (
            <div key={timestamp}>
              {new Date( parseInt(timestamp) ).toLocaleString()}: Game number { index }, was won by {winner.name} 
            </div>
          );
        })}
      </div>
    );
  }
}

export default Statistics;
