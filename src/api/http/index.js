import axios from "axios";
import { baseURL } from "./requestTable";

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const request = (payload) => {
  return http(payload);
};

export default request;
