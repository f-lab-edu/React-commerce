const EXPIRETIME = Date.now() + 86400000;
interface IStorageData {
  // 좋아요나 카트 데이터도 로컬스토리지에 저장할것이면 유니온으로 가져야할지두??
  data: IRecentKeyword[];
}
interface IRecentKeyword {
  name: string;
  path: string;
  expire: number;
}

type UnionType = IRecentKeyword;

export const setLocalStorage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, keyName: string) => {
  const base = localStorage.getItem(keyName);

  if (base != null) {
    let flag = false;
    const parsedData: IStorageData = JSON.parse(base);
    // keyName에 따라 순회하는 데이터 타입도 달라질텐데 어떻게 해야하는가... => UNION?
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
  localStorage.setItem(
    keyName,
    JSON.stringify({ data: [{ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME }] })
  );
};

export const getLocalStorage = (keyName: string): IStorageData | void => {
  const base = localStorage.getItem(keyName);
  if (base != null) {
    return JSON.parse(base).data;
  }
  return undefined;
};
