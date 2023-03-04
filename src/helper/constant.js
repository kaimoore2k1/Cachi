export const REQUEST_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
export const port = 3000;
export const baseURL = `http://localhost:${port}`;

export const requestTable = {
  getToken: `${baseURL}/token`,
};
