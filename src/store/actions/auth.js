import * as actionTypes from './actionTypes';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GraphRequestManager, GraphRequest} from 'react-native-fbsdk';

const authStart = () => ({
  type: actionTypes.AUTH_START,
});

const authSuccess = (token) => ({
  type: actionTypes.AUTH_SUCCESS,
  token: token,
});

const saveData = (data) => ({
  type: actionTypes.SAVE_DATA,
  data: data,
});

const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error: error,
});

const authCancel = () => ({
  type: actionTypes.AUTH_CANCEL,
});

const logout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const logoutWithFacebook = () => {
  return (dispatch) => {
    LoginManager.logOut();
    dispatch(logout());
  };
};

export const loginWithFacebook = () => {
  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id,name,first_name,last_name, picture.type(large)',
    },
  };
  return (dispatch) => {
    dispatch(authStart());
    LoginManager.logInWithPermissions(['public_profile']).then(
      (login) => {
        if (login.isCancelled) {
          dispatch(authCancel());
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken.toString();
            const profileRequest = new GraphRequest(
              '/me',
              {accessToken, parameters: PROFILE_REQUEST_PARAMS},
              (error, result) => {
                if (error) {
                  dispatch(authCancel());
                } else {
                  dispatch(saveData(result));
                }
              },
            );
            Promise.resolve(
              new GraphRequestManager().addRequest(profileRequest).start(),
            ).then(() => dispatch(authSuccess(accessToken)));
          });
        }
      },
      (error) => {
        dispatch(authFail(error));
      },
    );
  };
};
