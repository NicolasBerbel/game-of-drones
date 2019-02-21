import React, { Component } from 'react';
import Scores from './scores';
import moment from 'moment';

class GameView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoresVisible: false,
    }
  }

  toggleScores(scoresVisible) {
    this.setState({
      scoresVisible,
    });
  }

  render() {
    const { gameId, game } = this.props;
    const winner = game.players[game.winner];
    
    return (
      <div className="game-view box box--shadow">
        <div className="game-view__header">
          <div className="game-view__title">
            <time className="game-view__date" title={moment( game.startedAt ).calendar()}>
              {moment( game.startedAt ).fromNow()}
            </time>
            <b className="scores__winner">{winner.name}</b>
          </div>
          <div className="game-view__controls">
            {this.props.uploadable &&
              <button
                className="button button--success box--shadow button--small statistics__upload game-view__control"
                onClick={this.props.onUpload.bind(null, {
                  [gameId]: game,
                })}>
                  Upload
              </button>
            }
            <button
              className="button button--icon button--white box--shadow game-view__control"
              onClick={this.toggleScores.bind(this, !this.state.scoresVisible)}>
                {this.state.scoresVisible ? '-' : '+'}
            </button>
          </div>
        </div>
        {this.state.scoresVisible && <Scores {...{game}}/>}
      </div>
    );
  }
}

export default GameView;