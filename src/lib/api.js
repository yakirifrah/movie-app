import axios from 'axios';
import {apiConfig} from '../config/apiConfig';

export default {
  getData: (path) =>
    axios
      .get(path, apiConfig)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        return e;
      }),
};
