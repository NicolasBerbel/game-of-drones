import React, { Component } from 'react';
import Turn from '../../components/turn';

class Round extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      winner: null,
      turn: 1,
      moves: {},
      ...this.getPlayerByTurn(1),
    };
  }

  resetRound() {
    this.setState({
      winner: null,
      turn: 1,
      moves: {},
      ...this.getPlayerByTurn(1),
    });
  }

  getPlayerByTurn( turn ) {
    const {players} = this.props;

    return {
      playerId: Object.keys(players)[turn - 1],
      player: Object.values(players)[turn - 1]
    }
  }

  handleTurnEnd( move ) {
    const { players } = this.props;
    const { moves } = this.state;
    const nextTurn = this.state.turn + 1;
    const gameEnded = nextTurn > Object.keys(players).length;

    const stateMoves = {
      ...moves,
      [this.state.playerId]: move,
    };
    
    if ( !gameEnded ) {
      this.setState({
        turn: nextTurn,
        ...this.getPlayerByTurn( nextTurn ),
        moves: stateMoves,
      });
    } else {
      this.setState(
        {
          moves: stateMoves,
        },
        () => {
          this.props.onEnd({
            round: this.props.round,
            moves: stateMoves,
            winner: this.computeWinner()
          });
          this.resetRound();
        }
      );
    }
  }

  computeWinner() {
    const { moves } = this.state;
    const result = this.computeMoves.apply(this, Object.values(moves));
    if ( result === 0 ) return false;
    if ( result > 0 ) return Object.keys(moves)[0];
    if ( result < 0 ) return Object.keys(moves)[1];
  }

  computeMoves( move1, move2) {
    if ( move1 === move2 ) return 0; // Zero means there's no winner
    if ( this.props.moves[ move1 ].wins === move2) return 1; // move1 won
    if ( this.props.moves[ move2 ].wins === move1 ) return -1; // move1 lost
    return 0; // No winner in the case neither conditions is true.
  }

  render() {
    const {player, turn} = this.state;
    const {moves} = this.props;
    return (
      <div className="round">
        <Turn 
          player={player} 
          turn={turn} 
          moves={moves}
          onEnd={this.handleTurnEnd.bind(this)}
        /> 
      </div>
    );
  }
}

export default Round;
