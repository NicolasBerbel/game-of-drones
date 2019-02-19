import React, { Component } from 'react';

class Moves extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      move: null,
    };
  }

  handleClick( moveId ) {
    this.props.onSelected( moveId );
  }

  render() {
    return (
    <div className="moves">
      {Object.keys(this.props.moves).map( moveId => {
        const move = this.props.moves[ moveId ];
        return (
          <div key={moveId}>
            <button onClick={this.handleClick.bind(this, moveId)}>{move.name}</button>
          </div>
        );
      })}
    </div>
    );
  }
}

export default Moves;
