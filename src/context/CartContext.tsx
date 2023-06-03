import React, { createContext } from 'react';
import { produce } from 'immer';
import { ICart, IShopItem, setItem } from 'src/utils/localStorage';

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
  // eslint-disable-next-line
  const newState = produce(state, (draft) => {
    switch (action.type) {
      case 'INCREMENT':
        if ('id' in action) {
          const targetoption = draft.data[action.mall][action.product].options[action.id];
          targetoption.count += 1;
          targetoption.totalPrice += targetoption.singlePrice;
          targetoption.originTotalPrice += targetoption.originPrice;
        }
        break;
      case 'DECREMENT':
        if ('id' in action) {
          const targetoption = draft.data[action.mall][action.product].options[action.id];
          if (targetoption.count > 1) {
            targetoption.count -= 1;
            targetoption.totalPrice -= targetoption.singlePrice;
            targetoption.originTotalPrice -= targetoption.originPrice;
          }
        }
        break;
      case 'DELETE':
        if ('id' in action) {
          delete draft.data[action.mall][action.product].options[action.id];
          if (Object.keys(draft.data[action.mall][action.product].options).length === 0) {
            delete draft.data[action.mall][action.product];
            if (Object.keys(draft.data[action.mall]).length === 0) {
              delete draft.data[action.mall];
            }
          }
        }
        break;
      case 'MALL_SELECTED':
        if ('mall' in action) {
          Object.values(draft.data[action.mall]).forEach((value) => {
            value.selected = true;
          });
        }
        break;
      case 'MALL_UNSELECTED':
        if ('mall' in action) {
          Object.values(draft.data[action.mall]).forEach((value) => {
            value.selected = false;
          });
        }
        break;
      case 'PRODUCT_SELECTED':
        if ('product' in action) {
          draft.data[action.mall][action.product].selected = true;
        }
        break;
      case 'PRODUCT_UNSELECTED':
        if ('product' in action) {
          draft.data[action.mall][action.product].selected = false;
        }
        break;
      case 'ALL_SELECTED':
        Object.values(draft.data).forEach((mall) => {
          Object.values(mall).forEach((product: IShopItem) => {
            product.selected = true;
          });
        });
        break;
      case 'ALL_UNSELECTED':
        Object.values(draft.data).forEach((mall) => {
          Object.values(mall).forEach((product: IShopItem) => {
            product.selected = false;
          });
        });
        break;
      case 'SELECT_DELETE':
        Object.keys(draft.data).forEach((mallId) => {
          Object.keys(draft.data[mallId]).forEach((productId) => {
            if (draft.data[mallId][productId].selected) {
              delete draft.data[mallId][productId];
            }
          });
          if (Object.keys(draft.data[mallId]).length === 0) {
            delete draft.data[mallId];
          }
        });
        break;
      default:
        return state;
    }
  });
  setItem(newState);
  return newState;
};

export default CartContext;
