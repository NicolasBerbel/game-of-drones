import React, { Component } from 'react';
import Moves from './moves';

class Turn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      started: false,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleTurnEnd = this.handleTurnEnd.bind(this);
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
    const {player} = this.props;
      if(!this.state.started){
        return (
          <div className="turn box">
            <div className="turn--start-message"><b>{player.name}</b>, it's your turn, ensure nobody is watching your move and then press start!</div>
            <button className="turn--start-button button button--small button--wide button--rounded button--success" onClick={this.handleStart}>Start move</button>
          </div>
        );
      } else {
        return (
          <div className="turn">
            <p className="turn--move-message box">Choose your move <b>{player.name}</b>!</p>
            <div className="row">
              <Moves
                moves={this.props.moves}
                onSelected={this.handleTurnEnd}
              />
            </div>
          </div>
        );
      }
  }
}

export default Turn;
