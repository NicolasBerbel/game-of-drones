import React, { Component } from 'react';
import Moves from '../../components/moves';

class Turn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      started: false,
    };
  }

  handleTurnEnd( moveId ) {
    this.props.onEnd( moveId );
    this.setState({
      started: false,
    });
  }

  handleStart() {
    this.setState({
      started: true,
    });
  }

  render() {
    const {turn, player} = this.props;
      if(!this.state.started){
        return (
          <div>
              This is turn {turn}!
              It's {player.title}'s: <b>{player.name}</b> turn.
              <div>Ensure nobody is watching your move and then press start!</div>
              <button onClick={this.handleStart.bind(this)}>Start move</button>
          </div>
        );
      } else {
        return (
          <div>
              Very well! Choose your move {player.name}!
              <Moves
                moves={this.props.moves}
                onSelected={this.handleTurnEnd.bind(this)}
              />
          </div>
        );
      }
  }
}

export default Turn;
