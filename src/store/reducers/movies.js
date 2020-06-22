import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INITIAL_STATE = {
  data: [],
  favoriteMovies: [],
  error: null,
  loading: false,
  toggleFavorite: false,
};

const requestPending = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const requestSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    data: action.data,
  });
};

const requestFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const toggleFavorite = (state, action) => {
  return updateObject(state, {
    favoriteMovies: action.favoriteMovie,
    data: action.data,
    toggleFavorite: !state.toggleFavorite,
  });
};

const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_PENDING:
      return requestPending(state, action);
    case actionTypes.REQUEST_SUCCESS:
      return requestSuccess(state, action);
    case actionTypes.REQUEST_FAILED:
      return requestFailed(state, action);
    case actionTypes.TOGGLE_FAVORITE:
      return toggleFavorite(state, action);
    default:
      return state;
  }
};

export default MoviesReducer;
