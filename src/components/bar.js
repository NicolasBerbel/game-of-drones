import React, {Component} from 'react';

class Bar extends Component {

  render() {
    return (
      <div className="bar">
        {/* <button onClick={e => e} className="button button--null button--block"> */}
          {/* Settings */}
        {/* </button> */}
        <button onClick={this.props.toggleStatisticsModal.bind(null, true)} className="button button--null button--block">
          Statistics
        </button>
      </div>
    );
  }
}

export default Bar;