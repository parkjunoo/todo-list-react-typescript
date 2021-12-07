import AxiosInstance from './interceptors';

export default {
  setHeader(header_name: string, header_value: string) {
    AxiosInstance.defaults.headers.common[header_name] = header_value;
  },

  get(resource: string, params = {}) {
    return AxiosInstance.get(`${resource}`, { params }).catch((e) => {
      throw new Error(`service ${resource} ${e}`);
    });
  },

  post(resource: string, params = {}) {
    return AxiosInstance.post(`${resource}`, params);
  },
};
