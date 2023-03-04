import { api } from "src/boot/axios";
import { getUrl } from "src/helper";
import { REQUEST_METHOD } from "src/helper";

export const getToken = (param) => {
  const payload = {
    method: REQUEST_METHOD.POST,
    url: getUrl("getToken"),
    params: {
      username: param.username,
      password: param.password,
    },
  };
  return api(payload);
};
