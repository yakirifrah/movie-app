import config from './config';

export const apiConfig = {
  baseURL: config.API_URL,
  params: {
    api_key: config.API_KEY,
  },
};
