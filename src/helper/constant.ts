export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export const REQUEST_METHOD = {
  GET: 'GET' as Method,
  POST: 'POST' as Method,
  PUT: 'PUT' as Method,
  DELETE: 'DELETE' as Method,
};
export const port = 7179;
export const baseURL = `https://localhost:${port}`;

export const requestTable = {
  getToken: `${baseURL}/token`,
  getCategoryList: `${baseURL}/get-category-list`,
  getProductListByCategoryId: `${baseURL}/get-product-list-by-category-id`,
  getBestSellerProductListByCategoryId: `${baseURL}/get-best-seller-product-list-by-category-id`,
};
