import React, { Component } from 'react';
import GameView from './game-view';

class GameList extends Component {
  render() {
    const { games, title } = this.props;
    return (
      <div className="game-list">
        <h3 className="game-list__title">{title}</h3>
        <div className="game-list__items">
          {Object.keys(games).reverse().map( id => {
            const game = games[ id ];

            return (
              <GameView
                key={id}
                gameId={id}
                game={game}
                uploadable={this.props.uploadable}
                onUpload={this.props.onUpload}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default GameList;