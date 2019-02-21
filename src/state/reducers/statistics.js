import actions from '../actions';

const initialState = {
  isFetching: false,
  isPosting: false,
  games: {},
  localGames: {},
  modalActive: false,
};

const localGamesFromStorage = localStorage.getItem('statistics.localGames');
if ( !!localGamesFromStorage ) {
  try {
    initialState.localGames = JSON.parse(localGamesFromStorage);
  } catch (e){
    initialState.localGames = {};
  }
}

export default function statistics(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_STATISTICS_MODAL:
      return {
        ...state,
        modalActive: action.active,
      }
    case actions.ADD_GAME_TO_LOCAL_STATISTICS:
      const newState = {
        ...state,
        localGames: {
          ...state.localGames,
          [action.game.startedAt]: action.game,
        }
      }

      localStorage.setItem('statistics.localGames', JSON.stringify(newState.localGames));
      
      return newState;
    case actions.FETCH_GAMES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        games: {
          ...state.games,
          ...action.games
        }
      };
    case actions.FETCH_GAMES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case actions.POST_GAMES_REQUEST:
      return {
        ...state,
        isPosting: true,
      };
    case actions.POST_GAMES_SUCCESS:
      const localGames = Object.keys(action.gamesSent).reduce((localGames, gameIdSent) => {
        delete localGames[ gameIdSent ];
        return localGames;
      }, {...state.localGames});

      localStorage.setItem('statistics.localGames', JSON.stringify(localGames));

      return {
        ...state,
        isPosting: false,
        localGames,
      };
    case actions.POST_GAMES_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.error
      };
    case actions.SOCKET_GAME_ADDED:
      return {
        ...state,
        games: {
          ...state.games,
          ...action.game
        }
      }
    default:
      return state;
  }
};