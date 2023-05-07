import { AxiosRequestConfig } from 'axios';
import { api } from 'src/boot/axios';
import { getUrl } from 'src/helper';
import { REQUEST_METHOD } from 'src/helper';
import * as ApiTypes from './types';


export const getCategoryListAPI = () => {
  const payload: AxiosRequestConfig = {
    method: REQUEST_METHOD.GET,
    url: getUrl('getCategoryList'),
  };
  return api(payload);
};

export const getProductListByCategoryIdAPI = (params: ApiTypes.GetProductListByCategoryIdAPI) => {
  const payload: AxiosRequestConfig = {
    method: REQUEST_METHOD.GET,
    url: getUrl('getProductListByCategoryId'),
    params: params.id
  };
  return api(payload);
};

export const getBestSellerProductListByCategoryIdAPI = (params: ApiTypes.GetProductListByCategoryIdAPI) => {
  const payload: AxiosRequestConfig = {
    method: REQUEST_METHOD.GET,
    url: getUrl('getBestSellerProductListByCategoryId'),
    params: params.id
  };
  return api(payload);
};
