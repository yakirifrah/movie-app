import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INITIAL_STATE = {
  data: {},
  error: null,
  loading: false,
};

const requestPending=(state, action) => {
  return updateObject(state,{
    loading:true,
  })
};

const requestSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading:false,
    data: action.data,
  });
};

const requestFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_PENDING:
      return requestPending(state,action);
    case actionTypes.REQUEST_SUCCESS:
      return requestSuccess(state, action);
    case actionTypes.REQUEST_FAILED:
      return requestFailed(state, action);
    default:
      return state;
  }
};

export default MoviesReducer;
