import axios from 'axios';
import {getItem} from '../helpers/persistanceStorage';

axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use((config) => {
  const token = getItem('accessToken');
  const authorizationToken = token ? `Bearer ${token}` : '';
  config.headers.Authorization = authorizationToken;
  return config;
});

export {axios};
