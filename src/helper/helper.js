import { requestTable } from "src/helper";

export const getUrl = (url) => {
  return requestTable[url];
};
