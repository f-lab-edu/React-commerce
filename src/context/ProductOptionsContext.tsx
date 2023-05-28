import React, { createContext, useReducer, useState, useMemo } from 'react';
import IProductOptions from '@interfaces/Options';
import { produce } from 'immer';
import { useLocation } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';

export interface ISelectedProduct {
  options: string[];
  value: string;
  originTotalPrice: number;
  originPrice: number;
  singlePrice: number;
  count: number;
  totalPrice: number;
}

export interface ISelectedProducts {
  [id: string]: ISelectedProduct;
}

interface IDispatchContext {
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  dispatch: React.Dispatch<Action>;
}

interface Action {
  type: string;
  id: string;
  payload: ISelectedProduct;
}

interface IOptionContext {
  options?: IProductOptions;
  selected: number[];
  products: ISelectedProducts;
}

const productReducer = (products: ISelectedProducts, action: Action) => {
  // eslint-disable-next-line
  return produce(products, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        draft[action.id] = action.payload;
        break;
      case 'DELETE_PRODUCT':
        delete draft[action.id];
        break;
      case 'UPDATE_PRODUCT':
        draft[action.id] = action.payload;
        break;
      default:
        return products;
    }
  });
};

export const ProductOptionsContext = createContext<IOptionContext | null>(null);

export const ProductDispatchContext = createContext<IDispatchContext | null>(null);

const ProductOptionsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  const [products, dispatch] = useReducer(productReducer, {});
  const options = useFetch<IProductOptions>(`/detail/options/${search}`, 'GET');
  const [selected, setSelected] = useState<number[]>([]);
  const providerValue = useMemo(
    () => ({
      products,
      selected,
      options,
    }),
    [products, selected, options]
  );
  const dispatchProviderValue = useMemo(
    () => ({
      dispatch,
      setSelected,
    }),
    [dispatch, setSelected]
  );
  return (
    <ProductOptionsContext.Provider value={providerValue}>
      <ProductDispatchContext.Provider value={dispatchProviderValue}>{children}</ProductDispatchContext.Provider>
    </ProductOptionsContext.Provider>
  );
};

export default ProductOptionsContextProvider;
