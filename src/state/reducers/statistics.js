import { actions } from '../actions';

const initialState = {
  isFetching: false,
  isPosting: false,
  games: {},
  localGames: {},
};

export default function statistics(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_GAME_TO_LOCAL_STATISTICS:
      return {
        ...state,
        localGames: {
          ...state.localGames,
          [action.game.startedAt]: action.game,
        }
      }
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
      return {
        ...state,
        isPosting: false,
        localGames: false
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