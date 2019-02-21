import React, { Component } from 'react';

class Moves extends Component {
  handleClick( moveId ) {
    this.props.onSelected( moveId );
  }

  render() {
    const { moves } = this.props;
    return (
    <div className="moves">
      {Object.keys(moves).map( id => {
        const move = moves[ id ];
        return (
          <button key={id} className="button button--secondary button--border-bottom box--shadow moves__item" onClick={this.handleClick.bind(this, id)}>{move.name}</button>
        );
      })}
    </div>
    );
  }
}

export default Moves;
