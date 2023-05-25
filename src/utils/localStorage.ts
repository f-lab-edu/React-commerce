import IProductDetail from '@interfaces/Detail';
import { ISelectedProduct, ISelectedProducts } from 'src/context/ProductOptionsContext';

const EXPIRETIME = Date.now() + 86400000;
interface ISearchStorageData {
  data: IRecentKeyword[];
}
export interface IRecentKeyword {
  name: string;
  path: string;
  expire: number;
}

export interface ICart {
  data: IShop;
}

export interface IShop {
  [shopName: string]: IShopItems;
}

export interface IShopItems {
  [productValue: string]: IShopItem;
}

export interface IShopItem {
  productImage: string;
  total: number;
  estimated: number;
  options: ISelectedProducts;
  selected: boolean;
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
  localStorage.setItem('recentKeyword', JSON.stringify({ data: [{ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME }] }));
};

export const getLocalStorage = <T>(keyName: string): T | null => {
  const base = localStorage.getItem(keyName);
  if (base !== null) {
    return JSON.parse(base).data;
  }
  return null;
};

export const clearLocalStorage = (keyName: string) => {
  localStorage.removeItem(keyName);
};

export const setProductLocalStorage = (detailItem: IProductDetail, products: ISelectedProducts) => {
  const base = localStorage.getItem('cart');
  if (base != null) {
    const parsedData: ICart = JSON.parse(base);
    if (!parsedData.data[detailItem.store.name]) {
      parsedData.data[detailItem.store.name] = {};
    }
    parsedData.data[detailItem.store.name][detailItem.name] = {
      productImage: detailItem.image.images[0],
      total:
        (parsedData.data[detailItem.store.name][detailItem.name] ? parsedData.data[detailItem.store.name][detailItem.name].total : 0) +
        Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.originTotalPrice, 0),
      estimated:
        (parsedData.data[detailItem.store.name][detailItem.name] ? parsedData.data[detailItem.store.name][detailItem.name].estimated : 0) +
        Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.totalPrice, 0),
      selected: false,
      options: { ...parsedData.data[detailItem.store.name][detailItem.name]?.options, ...products },
    };
    localStorage.setItem('cart', JSON.stringify(parsedData));
    return;
  }

  const data: IShop = {};
  data[detailItem.store.name] = {};
  data[detailItem.store.name][detailItem.name] = {
    productImage: detailItem.image.images[0],
    total: Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.originTotalPrice, 0),
    estimated: Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.totalPrice, 0),
    selected: false,
    options: products,
  };
  localStorage.setItem('cart', JSON.stringify({ data }));
};
