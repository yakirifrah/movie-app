import axios from 'axios';
import {apiConfig} from '../config/apiConfig';

export default {
  getData: (path) =>
    axios
      .get(path, apiConfig)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            case 404:
              return Promise.reject(error.response.data.status_message);
            case 401:
              return Promise.reject(error.response.data.status_message);
            default:
              return Promise.reject(error.response.status);
          }
        } else if (error.request) {
          return Promise.reject('Client error');
        } else {
          console.log('Error', error.message);
        }
        return Promise.reject('config error');
      }),
};
