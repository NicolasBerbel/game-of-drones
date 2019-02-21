export const ADD_GAME_TO_LOCAL_STATISTICS = 'ADD_GAME_TO_LOCAL_STATISTICS';
export function addGameToLocalStatistics(game) {
  return {
    type: ADD_GAME_TO_LOCAL_STATISTICS,
    game
  }
}

export const TOGGLE_STATISTICS_MODAL = 'TOGGLE_STATISTICS_MODAL';
export function toggleStatisticsModal(active = false) {
  return {
    type: TOGGLE_STATISTICS_MODAL,
    active
  }
}

export function fetchGames() {
  return dispatch => {
    dispatch(fetchGamesRequest());

    return fetch(`${process.env.NODE_ENV === 'production' ? '' : 'http://localhost'}/games`, {mode: 'cors'})
      .then( response => response.json() )
      .then( json => dispatch(fetchGamesSuccess(json)))
      .catch( err => dispatch(fetchGamesFailure(err)));
  }
}

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export function fetchGamesRequest() {
  return {
    type: FETCH_GAMES_REQUEST,
  }
}

export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';
export function fetchGamesFailure(err) {
  return {
    type: FETCH_GAMES_FAILURE,
    ...err,
  }
}

export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export function fetchGamesSuccess(games) {
  return {
    type: FETCH_GAMES_SUCCESS,
    games,
  }
}

export function postGames( games ) {
  return ( dispatch, getState ) => {
    dispatch(postGamesRequest());
    return fetch(`${process.env.NODE_ENV === 'production' ? '' : 'http://localhost'}/games`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(games),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => dispatch(postGamesSuccess(json, games)))
      .catch(err => dispatch(postGamesFailure(err)));
  }
}

export const POST_GAMES_REQUEST = 'POST_GAMES_REQUEST';
export function postGamesRequest(status) {
  return {
    type: POST_GAMES_REQUEST,
  }
}

export const POST_GAMES_FAILURE = 'POST_GAMES_FAILURE';
export function postGamesFailure(status) {
  return {
    type: POST_GAMES_FAILURE,
    ...status
  }
}

export const POST_GAMES_SUCCESS = 'POST_GAMES_SUCCESS';
export function postGamesSuccess(status, gamesSent) {
  return {
    type: POST_GAMES_SUCCESS,
    ...status,
    gamesSent
  }
}

export const SOCKET_GAME_ADDED = 'SOCKET_GAME_ADDED';
export function socketGameAdded( game ) {
  return {
    type: SOCKET_GAME_ADDED,
    game
  }
}