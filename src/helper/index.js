import { requestTable } from "../api/http/requestTable";

export const getUrl = (url) => {
  return requestTable[url];
};
