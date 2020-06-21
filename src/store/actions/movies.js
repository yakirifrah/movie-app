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

const addMovie = (newFavoriteMovies, newData) => ({
  type: actionTypes.ADD_MOVIE,
  favoriteMovie: newFavoriteMovies,
  data: newData,
});

export const getPopularMovies = () => {
  console.log('getPopularMovies');
  return (dispatch) => {
    dispatch(requestPending());
    try {
      Api.getData('/movie/popular')
        .then((response) => {
          console.log(response);
          dispatch(requestSuccess(response.data.results));
        })
        .catch((error) => {
          dispatch(requestFailed, JSON.stringify(error));
        });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };
};

export const addMovieToFavorite = (id) => {
  return (dispatch, getState) => {
    const {data, favoriteMovies} = getState().movies;
    let addFav = true;
    let newFavoriteMovies = [];
    const newData = data.map((obj) =>
      obj.id === id ? {...obj, favorite: addFav} : obj,
    );
    const favItem = data.find((item) => item.id === id);
    if (isEmpty(favoriteMovies)) {
      newFavoriteMovies.push(favItem);
    } else {
      newFavoriteMovies = [...favoriteMovies, favItem];
    }
    console.log('favItem data: ', favItem);
    dispatch(addMovie(newFavoriteMovies, newData));
  };
};
