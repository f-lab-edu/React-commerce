import React, { createContext, useReducer, useState, useMemo } from 'react';
import IProductOptions from '@interfaces/Options';
import { useLocation } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';

export interface ISelectedProduct {
  options: string[];
  value: string;
  singlePrice: number;
  count: number;
  totalPrice: number;
}

interface ISelectedProducts {
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
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...products, [action.id]: action.payload };
    case 'DELETE_PRODUCT':
      delete products[action.id];
      return { ...products };
    case 'UPDATE_PRODUCT':
      return { ...products, [action.id]: action.payload };
    default:
      throw Error('from productReducer: 존재하지 않는 액션 타입입니다.');
  }
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
