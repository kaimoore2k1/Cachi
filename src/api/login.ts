import { AxiosRequestConfig } from 'axios';
import { api } from 'src/boot/axios';
import { getUrl } from 'src/helper';
import { REQUEST_METHOD } from 'src/helper';

export type GetTokenRequest = {
  username: string;
  password: string;
};

export const getToken = (param: GetTokenRequest) => {
  const payload: AxiosRequestConfig = {
    method: REQUEST_METHOD.POST,
    url: getUrl('getToken'),
    params: {
      username: param.username,
      password: param.password,
    },
  };
  return api(payload);
};
