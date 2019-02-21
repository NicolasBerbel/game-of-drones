import React, { Component } from 'react';
import Input from './input';
import MoveWins from './move-wins';
import slugify from 'slugify';

class AddMove extends Component {
  defaultState = {
    inputAddNew: null,
    newMoveName: '',
    newMoveId: null,
    newMoveWins: null,
    currentMove: null,
  }

  constructor( props ) {
    super( props );

    this.state = this.defaultState;

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addNewMoveHandler = this.addNewMoveHandler.bind(this);
  }

  onSelectMoveWins( newMoveWins ) {
    this.setState({
      newMoveWins,
      currentMove: {
        [this.state.newMoveId] : {
          new: true,
          name: this.state.newMoveName,
          wins: newMoveWins,
        }
      }
    });
  }

  addNewMoveHandler( move ) {
    this.props.onAddMove(this.state.currentMove);
    this.setState(this.defaultState);
  }


  onChangeHandler(event) {
    const { target } = event;
    const { value } = target;

    this.setState({
      newMoveName: value,
      newMoveId: slugify(value).toLowerCase(),
    });
  }

  render() {
    return (
      <div className="add-move">
        <h3 className="type--label">New Moves</h3>
        {!this.state.inputAddNew && 
          <button
            className="button box--shadow button--small button--success"
            onClick={() => {
              this.setState({
                inputAddNew: true,
              });
            }}
          >+ Add new move</button>
        }
        {this.state.inputAddNew && <>
          <Input
            title="Move name"
            value={this.state.newMoveName}
            onChange={this.onChangeHandler}
            appendButton={
              <>
                <button
                  className="button button--fab button--danger"
                  onClick={() => {
                    this.setState({
                      inputAddNew: false,
                      newMoveName: '',
                    });
                  }}
                >×</button>
                {this.state.newMoveName &&
                  <button
                    className="button button--fab button--success"
                    onClick={this.addNewMoveHandler.bind(this, this.state.currentMove)}
                    disabled={!this.state.newMoveWins}
                  >+</button>}
              </>
            }
          />
          {!!this.state.newMoveName && 
            <MoveWins
              moves={this.props.moves}
              moveId={this.state.newMoveId}
              moveName={this.state.newMoveName}
              onSelectMoveWins={this.onSelectMoveWins.bind(this)}
            />
          }
          </>
        }
      </div>
    )
  }
}

export default AddMove;