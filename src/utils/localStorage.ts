import getErrorMessage from './getErrorMessage';

const EXPIRETIME = Date.now() + 86400000;
interface IStorageData {
  data: IRecentKeyword[];
}
interface IRecentKeyword {
  name: string;
  path: string;
  expire: number;
}

type UnionType = IRecentKeyword;

export const setLocalStorage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, keyName: string) => {
  try {
    const base = localStorage.getItem(keyName);
    if (base != null) {
      let flag = false;
      const parsedData: IStorageData = JSON.parse(base);
      parsedData.data.forEach((data: UnionType) => {
        if (data.name === e.currentTarget.text) {
          data.expire = EXPIRETIME;
          flag = true;
        }
      });
      if (!flag) {
        parsedData.data.push({ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME });
        localStorage.setItem(keyName, JSON.stringify({ data: [...new Set(parsedData.data)] }));
      }
      return;
    }
    localStorage.setItem(keyName, JSON.stringify({ data: [{ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME }] }));
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const getLocalStorage = (keyName: string): IRecentKeyword[] | void => {
  try {
    const base = localStorage.getItem(keyName);
    if (base != null) {
      return JSON.parse(base).data;
    }
    return undefined;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const clearLocalStorage = (keyName: string): void => {
  try {
    localStorage.removeItem(keyName);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
