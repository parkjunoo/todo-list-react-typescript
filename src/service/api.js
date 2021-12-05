import AxiosInstance from './interceptors';

export default {
  setHeader(header_name, header_value) {
    AxiosInstance.defaults.headers.common[header_name] = header_value;
  },

  get(resource, params = {}) {
    return AxiosInstance.get(`${resource}`, { params }).catch((e) => {
      throw new Error(`service ${resource} ${e}`);
    });
  },

  post(resource, params = {}) {
    return AxiosInstance.post(`${resource}`, params);
  },
};
