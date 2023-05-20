import IProductDetail from '@interfaces/Detail';
import { ISelectedProduct, ISelectedProducts } from 'src/context/ProductOptionsContext';

const EXPIRETIME = Date.now() + 86400000;
interface ISearchStorageData {
  data: IRecentKeyword[];
}
interface IRecentKeyword {
  name: string;
  path: string;
  expire: number;
}

interface ICart {
  data: ICartItem;
}

interface ICartItem {
  [productValue: string]: { productImage: string; options: ISelectedProducts };
}

export const setSearchLocalStorage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const base = localStorage.getItem('recentKeyword');

  if (base != null) {
    let flag = false;
    const parsedData: ISearchStorageData = JSON.parse(base);
    parsedData.data.forEach((data: IRecentKeyword) => {
      if (data.name === e.currentTarget.text) {
        data.expire = EXPIRETIME;
        flag = true;
      }
    });
    if (!flag) {
      parsedData.data.push({ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME });
      localStorage.setItem('recentKeyword', JSON.stringify({ data: [...new Set(parsedData.data)] }));
    }
    return;
  }
  localStorage.setItem(
    'ca',
    JSON.stringify({ data: [{ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME }] })
  );
};

export const getLocalStorage = (keyName: string): IRecentKeyword[] | void => {
  const base = localStorage.getItem(keyName);
  if (base != null) {
    return JSON.parse(base).data;
  }
  return [];
};

export const clearLocalStorage = (keyName: string): void => {
  localStorage.removeItem(keyName);
};

export const setProductLocalStorage = (detailItem: IProductDetail, products: ISelectedProducts) => {
  const base = localStorage.getItem('cart');
  if (base != null) {
    const parsedData: ICart = JSON.parse(base);
    parsedData.data[detailItem.name] = { productImage: detailItem.image.images[0], options: products };
    localStorage.setItem('cart', JSON.stringify(parsedData));
    return;
  }

  const data: ICartItem = {};
  data[detailItem.name] = { productImage: detailItem.image.images[0], options: products };
  localStorage.setItem('cart', JSON.stringify({ data }));
};
