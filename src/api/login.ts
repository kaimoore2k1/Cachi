import { AxiosRequestConfig } from 'axios';
import { api } from 'src/boot/axios';
import { getUrl } from 'src/helper';
import { REQUEST_METHOD } from 'src/helper';
import * as ApiTypes from './types';

export const getToken = (param: ApiTypes.GetTokenRequest) => {
  const payload: AxiosRequestConfig = {
    method: REQUEST_METHOD.POST,
    url: getUrl('getToken'),
    data: {
      username: param.username,
      password: param.password,
    },
  };
  return api(payload);
};
