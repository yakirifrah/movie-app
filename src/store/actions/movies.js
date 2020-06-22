import * as actionTypes from './actionTypes';
import Api from '../../lib/api';
import {isEmpty, removeItemByIndex} from '../../lib/helpers';
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
          dispatch(requestFailed, 'Error: ' + error);
        });
    } catch (error) {
      dispatch(requestFailed, 'Error: ' + error.message);
    }
  };
};

export const toggleFavoriteMovie = (id) => {
  return (dispatch, getState) => {
    const {data, favoriteMovies} = getState().movies;
    const favItem = data.find((item) => item.id === id);
    let isFavorite = favItem.hasOwnProperty('favorite')
      ? !favItem.favorite
      : true;
    let newFavoriteMovies = [];
    const newData = data.map((obj) =>
      obj.id === id ? {...obj, favorite: isFavorite} : obj,
    );

    if (isEmpty(favoriteMovies)) {
      newFavoriteMovies.push(favItem);
    } else {
      if (favItem.favorite) {
        let idx = favoriteMovies.findIndex((item) => item.id === id);
        newFavoriteMovies = removeItemByIndex(favoriteMovies, idx);
      } else {
        newFavoriteMovies = [...favoriteMovies, favItem];
      }
    }
    dispatch(toggleFavorite(newFavoriteMovies, newData));
  };
};
