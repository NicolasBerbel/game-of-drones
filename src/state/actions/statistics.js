export const ADD_GAME_TO_LOCAL_STATISTICS = 'ADD_GAME_TO_LOCAL_STATISTICS';
export function addGameToLocalStatistics(game) {
  return {
    type: ADD_GAME_TO_LOCAL_STATISTICS,
    game
  }
}

export function fetchGames() {
  return dispatch => {
    dispatch(fetchGamesRequest());

    return fetch('http://localhost/games', {mode: 'cors'})
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
    return fetch('http://localhost/games', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(games),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => dispatch(postGamesSuccess(json)))
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
export function postGamesSuccess(status) {
  return {
    type: POST_GAMES_SUCCESS,
    ...status,
  }
}

export const SOCKET_GAME_ADDED = 'SOCKET_GAME_ADDED';
export function socketGameAdded( game ) {
  return {
    type: SOCKET_GAME_ADDED,
    game
  }
}