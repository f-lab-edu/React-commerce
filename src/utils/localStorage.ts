import IProductDetail from '@interfaces/detailType';
import { ISelectedProduct, ISelectedProducts } from 'src/context/ProductOptionsContext';
import getErrorMessage from './getErrorMessage';

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
  try {
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
        return;
      }
    }
    localStorage.setItem('recentKeyword', JSON.stringify({ data: [{ name: e.currentTarget.text, path: e.currentTarget.href, expire: EXPIRETIME }] }));
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const getLocalStorage = <T>(keyName: string): T | null => {
  try {
    const base = localStorage.getItem(keyName);
    if (base !== null) {
      return JSON.parse(base).data;
    }
    return null;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const cartChange = new CustomEvent('cartChange');
export const clearLocalStorage = (keyName: string) => {
  try {
    localStorage.removeItem(keyName);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
  window.dispatchEvent(cartChange);
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
    window.dispatchEvent(cartChange);
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
  window.dispatchEvent(cartChange);
};

export const setItem = (state: ICart) => {
  localStorage.setItem('cart', JSON.stringify(state));
  window.dispatchEvent(cartChange);
};

export const updateProductLocalStorage = () => {
  const base = localStorage.getItem('cart');
  if (base != null) {
    const parsedData: ICart = JSON.parse(base);
    Object.entries(parsedData.data).map(([shop, products]) => {
      Object.entries(products).map(([name, value]) => {
        if (value.selected) delete parsedData.data[shop][name];
      });
      if (Object.values(parsedData.data[shop]).length === 0) delete parsedData.data[shop];
    });
    localStorage.setItem('cart', JSON.stringify(parsedData));
  }
  dispatchEvent(cartChange);
};

export const buyingSessionStorage = (detailItem: IProductDetail, products: ISelectedProducts) => {
  const data: IShop = {};
  data[detailItem.store.name] = {};
  data[detailItem.store.name][detailItem.name] = {
    productImage: detailItem.image.images[0],
    total: Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.originTotalPrice, 0),
    estimated: Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.totalPrice, 0),
    selected: true,
    options: products,
  };
  sessionStorage.setItem('buying', JSON.stringify({ data }));
};
