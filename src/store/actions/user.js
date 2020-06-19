import * as actionTypes from './actionTypes';

// import {GraphRequestManager, GraphRequest} from 'react-native-fbsdk';
//
// export const getInfoFromToken = (token) => {
//   const PROFILE_REQUEST_PARAMS = {
//     fields: {
//       string: 'id,name,first_name,last_name',
//     },
//   };
//   const profileRequest = new GraphRequest(
//     '/me',
//     {token, parameters: PROFILE_REQUEST_PARAMS},
//     (error, result) => {
//       if (error) {
//         requestFailed(error);
//       } else {
//         requestSuccess(result);
//       }
//     },
//   );
//   new GraphRequestManager().addRequest(profileRequest).start();
// };

// export const requestFailed = (error) => ({
//   type: actionTypes.REQUEST_FAILED,
//   error,
// });
//
// export const requestSuccess = (result) => ({
//   type: actionTypes.REQUEST_SUCCESS,
//   data: result,
// });
