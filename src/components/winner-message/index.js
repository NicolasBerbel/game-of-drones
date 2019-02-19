import React, { Component } from 'react';

class WinnerMessage extends Component {

  handleClick() {
    this.props.playAgain();
  }

  render() {
    const { player } = this.props;

    return (
      <div className="winner-message">
        We have a winner!<br/>
        <h2>Congrats <b>{player.name}</b>!</h2>
        <button onClick={this.handleClick.bind(this)}>Play again!</button>
      </div>
    );
  }
}

export default WinnerMessage;
