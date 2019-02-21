import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.active ? 'modal--active' : ''}`}>
        <div className="modal__container">
          <div className="modal__dialog">
            { this.props.title && 
              <div className="modal__header">
                <h3 className="modal__title">{this.props.title}</h3>
                <button onClick={this.props.onClose} className="modal__close button button--icon"></button>
              </div>
            }
            <div className="modal__body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;