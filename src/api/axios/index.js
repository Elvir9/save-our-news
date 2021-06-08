import axios from 'axios';

const backendURL = process.env.REACT_APP_BACKEND_URL;
console.log(backendURL);
const axiosInstance = axios.create({
  baseURL: backendURL,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
