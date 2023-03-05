import { requestTable } from 'src/helper';

export const getUrl = (url: keyof typeof requestTable) => {
  return requestTable[url];
};
