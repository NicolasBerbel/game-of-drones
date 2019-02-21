import React, {Component} from 'react';

class Input extends Component {

  constructor( props ) {
    super(props);

    this.state = {
      focused: false,
      // invalid: false,
      // valid: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus( event ) {
    this.setState({
      focused: true,
    });
  }

  handleBlur( event ) {
    this.setState({
      focused: false,
    });
  }
  
  render() {
    const { id, name, title, value, onChange, onInvalid } = this.props;
    const { focused/* , invalid, valid */ } = this.state;
    return (
      <div className={`input ${!!value && 'input--filled'} ${!!focused && 'input--focused'}`}>
          <label htmlFor={id} className="input__label">{title}</label>
          <input
            type="text"
            className="input__control"
            id={id}
            name={name}
            value={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={onChange}
            onInvalid={onInvalid}
            required
            />
        </div>
    );
  }
}

export default Input;