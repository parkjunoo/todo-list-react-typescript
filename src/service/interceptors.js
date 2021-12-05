import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.PUBLIC_URL}/MockData/`,
  timeout: 1000,
});

const requestSuccess = (config) => {
  return config;
};
const requestFailure = (error) => {
  return Promise.reject(error);
};
const responseSuccess = (response) => {
  return response;
};
const reponseFailure = (error) => {
  return Promise.reject(error);
};
instance.interceptors.request.use(requestSuccess, requestFailure);
instance.interceptors.response.use(responseSuccess, reponseFailure);

export default instance;
