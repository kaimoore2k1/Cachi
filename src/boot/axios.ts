import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { baseURL } from 'src/helper';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const user = localStorage.getItem('user');
const userInfo = user ? JSON.parse(user) : {};

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user ? userInfo.token : ''}`
  },
  withCredentials: false,
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    //config.headers.Authorization = 'Bearer Token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
