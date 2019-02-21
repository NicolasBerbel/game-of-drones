import React, { Component } from 'react';

class WinnerMessage extends Component {

  handleClick() {
    this.props.playAgain();
  }

  render() {
    const { player } = this.props;

    return (
      <div className="winner-message box">
        We have a winner!<br/>
        <h2 className="winner-message__title">Congratulations <b className="scores__winner">{player.name}</b>!</h2>
        <button className="button button--small button--rounded button--null winner-message__scores-button" onClick={this.props.openScores}>Open statistics</button>
        <button className="button button--small button--rounded button--outline button--primary" onClick={this.handleClick.bind(this)}>Play again!</button>
      </div>
    );
  }
}

export default WinnerMessage;
