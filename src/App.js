import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      settings: {
        roundsToWin: 3,
        moves: {
          scissor: {
            'name': 'Scissor',
            'wins': 'paper'
          },
          paper: {
            'name': 'Paper',
            'wins': 'rock'
          },
          rock: {
            'name': 'Rock',
            'wins': 'scissor'
          },
        },
      },
      players: {
        player1: {
          title: 'Player 1',
          name: ''
        },
        player2: {
          title: 'Player 2',
          name: ''
        },
      }
    }
  }

  editPlayer( playerId, playerName ) {
    const { players } = this.state;

    this.setState({
      players: {
        ...players,
        [playerId]: {
          ...players[playerId],
          name: playerName
        },
      }
    });
  }

  handleGameOver( gameData ) {
    this.setState({
      started: false,
    });
  }

  handleStart() {
    this.setState({
      started: true,
    });
  }

  handleRestart() {
    this.setState({
      started: false,
    });
  }

  render() {
    return (
      <div className="App">
        {
          (
            this.state.started &&
            <Game 
              players={this.state.players} 
              settings={this.state.settings} 
              onGameOver={this.handleGameOver.bind(this)}
              onRestart={this.handleRestart.bind(this)}
            />
          ) || (
            <Register 
              players={this.state.players}
              onEditPlayer={this.editPlayer.bind(this)}
              onStart={this.handleStart.bind(this)}
            />
          )
        }
      </div>
    );
  }
}

export default App;
