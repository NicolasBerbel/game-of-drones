import React, { Component, Fragment } from 'react';
import ordinalIndicator from '../helpers/ordinal-indicator';

class Scores extends Component {
  render() {
    const { game } = this.props;
    const { rounds, players, moves } = game;
    return (
    <div className="scores">
      {!!rounds.length && <>
        <h4 className="scores__title">Rounds scores</h4>
        <div className="scores__players">
          {Object.keys(players).map(player => {
            const playerName = players[player].name;
            const playerScore = game.scores[player];
            let className;

            if ( game.winner ) {
              className = game.winner === player ? 'scores__winner' : 'scores__looser';
            } else {
              // className = Object.keys(game.scores).reduce((acc, scoresPlayer) => {
                // const score = game.scores[scoresPlayer];
                // if( score > acc )
              // }, 0);
            }

            return (
              <div key={player} className={className}>
                {playerName}: {playerScore}
              </div>
            );
          })}
        </div>
      </>}
      {/* {!!rounds.le} */}
      {/* <div className="scores__items"> */}
        {[...rounds].reverse().map((round) => {
          return (
            <div key={round.round} className="scores__item">
              <div className="scores__info">
                <span className="scores__round"><b>{ordinalIndicator(round.round)}</b>: </span>
                <span className={round.winner ? "scores__player" : "scores__draw"}>{round.winner ? players[ round.winner ].name : 'Draw'}</span>
              </div>
              <div className="scores__play">
                <span className="scores__move">
                  {Object.keys(round.moves).map( (player, index ) => {
                    const moveInfo = moves[round.moves[player]];
                    const playerInfo = players[player];

                    let info = moveInfo.name;
                    let className = (round.winner === player) ? 'scores__winner' : 'scores__looser';
                    // if( !)
                    // if ()
                    if ( !round.winner ) className = 'scores__draw';
                    return (
                      <Fragment key={player}>
                      <span title={`${playerInfo.title}'s ${playerInfo.name}:\n${moveInfo.name}`} className={className}>
                        {info}
                      </span>
                      {index === 0 && ' × '}
                      </Fragment>
                    );
                  })}
                </span>
              </div>
            </div>
          );
        })}
      {/* </div> */}
    </div>
    );
  }
}

export default Scores;
