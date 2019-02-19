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

    this.props.editPlayer( name, value );
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

    this.props.startGame( players );
  }

  render() {
    return (
      <div className="Register">
        {Object.keys(this.props.players).map( (id) => {
          const player = this.props.players[id];
          return (<div key={id}>
            {player.title}: 
            <input
              type="text"
              name={id}
              value={player.name}
              onChange={this.handleChange}
              onInvalid={this.handleInvalid}
              required
              />
          </div>);
        })}
        <div>
          <button onClick={this.handleStart}>Start!</button>
        </div>
      </div>
    );
  }
}

export default Register;
