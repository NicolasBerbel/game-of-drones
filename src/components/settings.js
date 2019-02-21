import React, { Component } from 'react';
import Modal from './modal';
import EditMoves from './edit-moves';
import Input from './input';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleRoundsToWinChange = this.handleRoundsToWinChange.bind(this);
    this.handleRoundsToWinInvalid = this.handleRoundsToWinInvalid.bind(this);
    this.handleUpdateMoves = this.handleUpdateMoves.bind(this);
  }

  handleUpdateMoves( updatedMoves ) {
    this.props.updateMoves( updatedMoves );
  }
  
  handleRoundsToWinChange( event ){
    const { target } = event;
    const { value } = target;

    if ( target.checkValidity() ) this.handleValid.call(this, arguments);
    if ( !value ) return;
    this.props.changeRoundsToWin( value );
  }

  handleValid(){
    // console.log('handleValid', this, arguments);
  }
  
  handleRoundsToWinInvalid(){
    // console.log('handleRoundsToWinInvalid', this, arguments);
  }

  render() {
    const {
      modalActive,
      toggleSettingsModal,
      roundsToWin,
      moves
    } = this.props;
    return (
      <Modal title="Settings" active={modalActive} onClose={toggleSettingsModal.bind(null, false)}>
        {this.props.mightReset && 
          <div className="flex justify-end align-center">
            <button className="button button--warning button--small" onClick={this.props.resetSettings}>Restore default settings</button>
          </div>
        }
        <Input
          id="roundsToWin"
          value={roundsToWin}
          type="number"
          title="Rounds to win a game"
          name="roundsToWin"
          onChange={this.handleRoundsToWinChange}
          onInvalid={this.handleRoundsToWinInvalid}
          min={1}
        />
        <EditMoves moves={moves} onUpdateMoves={this.handleUpdateMoves}/>
      </Modal>
    );
  }
}

export default Settings;