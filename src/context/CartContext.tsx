import React, { useReducer, createContext, useMemo } from 'react';
import { ICart, IShop, IShopItem } from 'src/utils/localStorage';

interface AllAction {
  type: string;
}
interface MallAction extends AllAction {
  mall: string;
}
interface ProductAction extends MallAction {
  product: string;
}
interface OptionAction extends ProductAction {
  id: string;
}

interface ICartContext {
  localData: ICart;
  dispatch: React.Dispatch<AllAction | MallAction | ProductAction | OptionAction>;
}

const CartContext = createContext<ICartContext | null>(null);

export const cartReducer = (state: ICart, action: AllAction | MallAction | ProductAction | OptionAction) => {
  switch (action.type) {
    case 'INCREMENT':
      if ('id' in action) {
        state.data[action.mall][action.product].options[action.id].count += 1;
        state.data[action.mall][action.product].options[action.id].totalPrice += state.data[action.mall][action.product].options[action.id].singlePrice;
        state.data[action.mall][action.product].options[action.id].originTotalPrice += state.data[action.mall][action.product].options[action.id].originPrice;
        state.data[action.mall][action.product].estimated += state.data[action.mall][action.product].options[action.id].singlePrice;
        state.data[action.mall][action.product].total += state.data[action.mall][action.product].options[action.id].originPrice;
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'DECREMENT':
      if ('id' in action) {
        if (state.data[action.mall][action.product].options[action.id].count > 1) {
          state.data[action.mall][action.product].options[action.id].count -= 1;
          state.data[action.mall][action.product].options[action.id].totalPrice -= state.data[action.mall][action.product].options[action.id].singlePrice;
          state.data[action.mall][action.product].options[action.id].originTotalPrice -= state.data[action.mall][action.product].options[action.id].originPrice;
          state.data[action.mall][action.product].estimated -= state.data[action.mall][action.product].options[action.id].singlePrice;
          state.data[action.mall][action.product].total -= state.data[action.mall][action.product].options[action.id].originPrice;
          localStorage.setItem('cart', JSON.stringify({ ...state }));
        }
        return { ...state };
      }
      return { ...state };
    case 'DELETE':
      if ('id' in action) {
        delete state.data[action.mall][action.product].options[action.id];
        if (Object.keys(state.data[action.mall][action.product].options).length === 0) {
          delete state.data[action.mall][action.product];
          if (Object.keys(state.data[action.mall]).length === 0) {
            delete state.data[action.mall];
          }
        }
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'MALL_SELECTED':
      if ('mall' in action) {
        Object.values(state.data[action.mall]).forEach((value) => {
          value.selected = true;
        });
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'MALL_UNSELECTED':
      if ('mall' in action) {
        Object.values(state.data[action.mall]).forEach((value) => {
          value.selected = false;
        });
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'PRODUCT_SELECTED':
      if ('product' in action) {
        state.data[action.mall][action.product].selected = true;
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'PRODUCT_UNSELECTED':
      if ('product' in action) {
        state.data[action.mall][action.product].selected = false;
        localStorage.setItem('cart', JSON.stringify({ ...state }));
        return { ...state };
      }
      return { ...state };
    case 'ALL_SELECTED':
      Object.values(state.data).forEach((mall) => {
        Object.values(mall).forEach((product: IShopItem) => {
          product.selected = true;
        });
      });
      localStorage.setItem('cart', JSON.stringify({ ...state }));
      return { ...state };
    case 'ALL_UNSELECTED':
      Object.values(state.data).forEach((mall) => {
        Object.values(mall).forEach((product: IShopItem) => {
          product.selected = false;
        });
      });
      localStorage.setItem('cart', JSON.stringify({ ...state }));
      return { ...state };
    case 'SELECT_DELETE':
      Object.keys(state.data).forEach((mallId) => {
        Object.keys(state.data[mallId]).forEach((productId) => {
          if (state.data[mallId][productId].selected) {
            delete state.data[mallId][productId];
          }
        });
        if (Object.keys(state.data[mallId]).length === 0) {
          delete state.data[mallId];
        }
      });
      localStorage.setItem('cart', JSON.stringify({ ...state }));
      return { ...state };
    default:
      throw Error('적합한 액션을 사용해주시오');
  }
};

export default CartContext;
