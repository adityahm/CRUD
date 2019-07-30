import axios from 'axios';
import querystring from 'querystring';

const client = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: params =>
    querystring.stringify({ ...params }, '&', '=', { arrayFormat: 'repeat' }),
  timeout: 5000
});

client.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-console
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response) {
      // Request was made but server responded with 401
      if (error.response.status === 401) {
        return {};
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }
);

export default client;
