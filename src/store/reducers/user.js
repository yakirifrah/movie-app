import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INITIAL_STATE = {
  data: {},
  error: null,
  dataExits: false,
};

const requestSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    data: action.data,
    dataExits: true,
  });
};

const requestFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SUCCESS:
      return requestSuccess(state, action);
    case actionTypes.REQUEST_FAILED:
      return requestFailed(state, action);
    default:
      return state;
  }
};

export default UserReducer;
