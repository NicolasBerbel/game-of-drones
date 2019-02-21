import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        {
          !!Object.keys(this.props.localGames).length &&
          <div>
            <h3>Local games played</h3>
            {Object.keys(this.props.localGames).reverse().map( id => {
              const game = this.props.localGames[ id ];
              const winner = game.players[game.winner];

              return (
                <div key={id}>
                  {new Date( game.startedAt ).toLocaleString()}: Winner: <b>{winner.name}</b> 
                </div>
              );
            })}
            <button onClick={this.props.postGames.bind(null, this.props.localGames)}>Upload my statistics!</button>
          </div>
        }
        {
          !!Object.keys(this.props.games).length &&
          <div>
            <h3>Global games played</h3>
            {Object.keys(this.props.games).reverse().map( id => {
              const game = this.props.games[ id ];
              const winner = game.players[game.winner];

              return (
                <div key={id}>
                  {new Date( game.startedAt ).toLocaleString()}: Winner: <b>{winner.name}</b> 
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}

export default Statistics;
