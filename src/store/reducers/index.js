import {combineReducers} from 'redux';
import AuthReducer from './auth';
import MoviesReducer from './movies';

const rootReducer = combineReducers({
  auth: AuthReducer,
  movies: MoviesReducer,
});

export default rootReducer;
