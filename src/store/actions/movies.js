import * as actionTypes from './actionTypes';
import Api from '../../lib/api';
import {isEmpty} from '../../lib/helpers';
const requestPending = () => ({
  type: actionTypes.REQUEST_PENDING,
});

const requestFailed = (error) => ({
  type: actionTypes.REQUEST_FAILED,
  error,
});

const requestSuccess = (result) => ({
  type: actionTypes.REQUEST_SUCCESS,
  data: result,
});

const toggleFavorite = (newFavoriteMovies, newData) => ({
  type: actionTypes.TOGGLE_FAVORITE,
  favoriteMovie: newFavoriteMovies,
  data: newData,
});

export const getPopularMovies = () => {
  return (dispatch) => {
    dispatch(requestPending());
    try {
      Api.getData('/movie/popular')
        .then((response) => {
          dispatch(requestSuccess(response.data.results));
        })
        .catch((error) => {
          dispatch(requestFailed, JSON.stringify(error));
        });
    } catch (e) {
      dispatch(requestFailed, JSON.stringify(e));
    }
  };
};

export const toggleFavoriteMovie = (id, movie) => {
  return (dispatch, getState) => {
    const {data, favoriteMovies} = getState().movies;
    let isFavorite = movie.hasOwnProperty('favorite') ? !movie.favorite : true;
    let newFavoriteMovies = [];
    const newData = data.map((obj) =>
      obj.id === id ? {...obj, favorite: isFavorite} : obj,
    );

    const favItem = data.find((item) => item.id === id);
    if (isEmpty(favoriteMovies)) {
      newFavoriteMovies.push(favItem);
    } else {
      newFavoriteMovies = [...favoriteMovies, favItem];
    }
    dispatch(toggleFavorite(newFavoriteMovies, newData));
  };
};
