import React, { Component } from 'react';
// import Input from './input';

class MoveWins extends Component {
  render() {
    const { moveId, moveName, moves, onSelectMoveWins } = this.props;
    const existentMove = moves[moveId];
    return (
      <div className="input__wrapper">
        <div className="input input--filled">
          <label className="input__label">{moveName} wins:</label>
          <select defaultValue={!!existentMove ? existentMove.wins : false} className="input__control" onChange={( e ) => onSelectMoveWins(e.target.value)}>
            <option value={false} disabled={true}>Select a move</option> 
            {Object.keys(moves).map( optionKey => {
              const moveOption = moves[optionKey];
              return (
                optionKey !== moveId && 
                <option
                  key={optionKey}
                  value={optionKey}
                  disabled={moveOption.wins === moveId}
                >{moveOption.name}</option>
              )
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default MoveWins;