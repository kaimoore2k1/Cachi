import { REQUEST_METHOD } from "../../../const";
import request from "src/api/http";
import { getUrl } from "src/helper";

export const getToken = (param) => {
  const payload = {
    method: REQUEST_METHOD.POST,
    url: getUrl("getToken"),
    params: {
      username: param.username,
      password: param.password,
    },
  };
  return request(payload);
};
