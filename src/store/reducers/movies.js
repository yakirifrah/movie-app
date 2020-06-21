import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INITIAL_STATE = {
  data: {},
  favoriteMovies: {},
  error: null,
  loading: false,
  addMovie: false,
  delMovie: false,
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

const addMovieToFavorite = (state, action) => {
  return updateObject(state, {
    favoriteMovies: action.favoriteMovie,
    data: action.data,
    addMovie: true,
    delMovie: false,
  });
};

const delMovieToFavorite = (state, action) => {
  return updateObject(state, {
    addMovie: false,
    delMovie: true,
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
    case actionTypes.ADD_MOVIE:
      return addMovieToFavorite(state, action);
    case actionTypes.DEL_MOVIE:
      return delMovieToFavorite(state, action);
    default:
      return state;
  }
};

export default MoviesReducer;
