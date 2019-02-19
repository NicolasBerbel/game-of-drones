import React, { Component } from 'react';

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

    this.props.onEditPlayer( name, value );
  }

  handleValid(){
    // console.log('handleValid', this, arguments);
  }
  
  handleInvalid(){
    // console.log('handleInvalid', this, arguments);
  }

  handleStart(){
    const {players} = this.props;

    const isValid = Object.values(players).reduce( (acc, player) => {
      return acc && !!player.name;
    }, true);

    if ( !isValid ) return;

    this.props.onStart();
  }

  render() {
    return (
      <div className="Register">
        {Object.keys(this.props.players).map( (playerId) => {
          const player = this.props.players[playerId];
          return (<div key={playerId}>
            {player.title}: 
            <input
              type="text"
              name={playerId}
              value={player.name}
              onChange={this.handleChange.bind(this)}
              onInvalid={this.handleInvalid.bind(this)}
              required
              />
          </div>);
        })}
        <div>
          <button onClick={this.handleStart.bind(this)}>Start!</button>
        </div>
      </div>
    );
  }
}

export default Register;
