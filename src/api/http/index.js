import axios from "axios";
import { baseURL } from "./requestTable";

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  timeout: 5000
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer Token';
  return config;
}, (error) => {
  return Promise.reject(error);
})

http.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error);
})

export default http;
