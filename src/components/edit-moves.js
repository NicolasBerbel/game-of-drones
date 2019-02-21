import React, { Component } from 'react';
import AddMove from './add-move';
import MoveWins from './move-wins';

class EditMoves extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // moves: this.props.moves,
      activeEdit: null,
    };

    this.onAddMove = this.onAddMove.bind(this);
    this.onSelectMoveWins = this.onSelectMoveWins.bind(this);
  }

  componentDidUpdate( props ) {
    // this.setState({
      // moves: props.moves,
    // })
  }

  onSelectMoveWins( wins ) {
    const updatedMoves = {
      ...this.props.moves,
      [this.state.activeEdit]: {
        ...this.props.moves[this.state.activeEdit],
        wins
      }
    };
    
    // this.setState({
    //   moves: updatedMoves,
    // });

    this.props.onUpdateMoves(updatedMoves);
  }

  onAddMove( move ) {
    const updatedMoves = {
      ...this.props.moves,
      ...move
    };
    
    this.setState({
      activeEdit: null,
      // moves: updatedMoves,
    });

    this.props.onUpdateMoves(updatedMoves);
  }
  
  render() {
    const { moves } = this.props;
    return (
      <div className="edit-moves">
        <h3 className="edit-moves__title type--label flex align-center justify-between">
          Edit existent moves
        </h3>
        <div className="edit-moves__wrapper">
          <div className="moves">
            {Object.keys(moves).map( moveKey => {
              const move = moves[moveKey];

              let className = "edit-moves__item moves__item button button--border-bottom box--shadow";
              let onClick = () => this.setState({activeEdit: moveKey});
              if ( this.state.activeEdit === moveKey ) {
                className += ' button--primary button--active';
                onClick = () => this.setState({activeEdit: null});
              } else {
                className += ' button--secondary';
              }
              return (
                <div
                  tabIndex="1"
                  role="button"
                  key={moveKey}
                  className={className}
                  onClick={onClick}
                >
                  {move.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="edit-moves--details">
          {Object.keys(moves).map( moveId => {
            const move = moves[moveId];

            return (
              moveId === this.state.activeEdit &&
              <div key={moveId}>
                <MoveWins
                  moves={this.props.moves}
                  moveId={moveId}
                  moveName={move.name}
                  onSelectMoveWins={this.onSelectMoveWins.bind(moveId)}
                />
              </div>
            );
          })}
        </div>
        <AddMove moves={this.props.moves} onAddMove={this.onAddMove}/>
      </div>
    );
  }
}

export default EditMoves;