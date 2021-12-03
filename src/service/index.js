import AxiosInstance from './interceptors';

export default {
  setHeader(header_name, header_value) {
    this.instance.defaults.headers.common[header_name] = header_value;
  },

  get(resource, params = {}) {
    return this.instance.get(`${resource}`, { params }).catch((e) => {
      throw new Error(`service ${resource} ${e}`);
    });
  },

  post(resource, params = {}) {
    return this.instance.post(`${resource}`, params);
  },
};

