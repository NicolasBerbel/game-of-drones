import React, { Component } from 'react';
import GameList from './game-list';
import Modal from './modal';

class Statistics extends Component {
  
  render() {
    const { games, localGames, postGames, modalActive, toggleStatisticsModal } = this.props;
    return (
      <div className="statistics">
        <Modal title="Statistics" active={modalActive} onClose={toggleStatisticsModal.bind(null, false)}>
          {
            !!Object.keys(localGames).length && <>
              <GameList uploadable={true} onUpload={postGames} games={localGames} title={
                <>
                Local games
                <button className="button button--success box--shadow statistics__upload" onClick={postGames.bind(null, localGames)}>
                  Upload all
                </button>
                </>
                }/>
              
            </>
          }
          {
            !!Object.keys(games).length &&
            <GameList games={games} title="Global games" />
          }
        </Modal>
      </div>
    );
  }
}

export default Statistics;
