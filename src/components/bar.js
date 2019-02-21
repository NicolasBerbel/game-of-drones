import React, {Component} from 'react';
import StatisticsContainer from '../containers/statistics';
import SettingsContainer from '../containers/settings';

class Bar extends Component {
  render() {
    return (
      <>
        <div className="bar">
          {this.props.game.started &&
            <button
              onClick={() => {
                this.props.restartGame();
              }}
              className="button button--null button--block"
            >
              Restart Game
            </button>
          }
          <button
            onClick={() => {
              this.props.toggleSettingsModal(true);
              this.props.restartGame();
            }}
            className="button button--null button--block"
          >
            Settings
          </button>
          <button
            onClick={this.props.toggleStatisticsModal.bind(null, true)}
            className="button button--null button--block"
          >
            Statistics
          </button>
        </div>
        <SettingsContainer />
        <StatisticsContainer />
      </>
    );
  }
}

export default Bar;