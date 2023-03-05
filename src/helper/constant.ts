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
export const port = 3000;
export const baseURL = `http://localhost:${port}`;

export const requestTable = {
  getToken: `${baseURL}/token`,
};
