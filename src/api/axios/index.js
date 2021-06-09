import axios from 'axios';
import authService from 'utils/authService';

const backendURL = 'http://localhost:8080';
const axiosInstance = axios.create({
  baseURL: backendURL,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = authService.getToken();
    config.headers.Authorization = `${token}`;

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
