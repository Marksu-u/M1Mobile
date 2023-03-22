import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('Global Error:', error.response.status, error.message);
    return Promise.reject(error);
  }
);
