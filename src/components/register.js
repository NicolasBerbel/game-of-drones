import React, { Component } from 'react';
import Input from './input';

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.bindEvents();
  }

  bindEvents() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleChange( event ){
    const { target } = event;
    const {name, value} = target;

    if ( target.checkValidity() ) this.handleValid.call(this, arguments);

    this.props.editPlayer( name, value );
  }

  handleValid(){
    // console.log('handleValid', this, arguments);
  }
  
  handleInvalid(){
    // console.log('handleInvalid', this, arguments);
  }

  handleStart(){
    const {startGame, players, moves} = this.props;

    if ( !this.canStart() ) return;

    startGame( {players, moves} );
  }

  canStart( props = this.props ) {
    const canStart = Object.values(props.players).every(player => !!player.name);
    return canStart;
  }

  render() {
    const { players } = this.props;
    const canStart = this.canStart();

    return (
      <div className="register">
        
        <h2 className="register__title game__title">
        Game of Drones
        </h2>
        <h5 className="register__title">
          {canStart ? 'Click start to begin the fight!' : 'Enter player\'s names:'}
        </h5>
        {Object.keys(players).map( (id) => {
          const player = players[id];
          return <Input
            key={id}
            title={player.title}
            name={id}
            id={id}
            value={player.name}
            onChange={this.handleChange}
            onInvalid={this.handleInvalid}
          />;
        })}
        <div>
          <button
            disabled={!canStart}
            className="button button--primary button--outline button--block"
            onClick={this.handleStart}
          >{canStart ? 'Start!' : 'Enter player names to continue.'}</button>
        </div>
      </div>
    );
  }
}

export default Register;
