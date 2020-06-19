import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INITIAL_STATE = {
  token: null,
  error: null,
  loading: false,
  data: null,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    data: action.data,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    data: null,
  });
};

const saveData = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.SAVE_DATA:
      return saveData(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
