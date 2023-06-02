import React, { useContext } from 'react';
import { IShopItems } from 'src/utils/localStorage';
import { ColorSet } from 'src/utils/constant';
import CartContext from 'src/context/CartContext';
import styled from 'styled-components';
import Product from './Product';

const Mall = ({ title, data }: { title: string; data: IShopItems }) => {
  const cartContext = useContext(CartContext);

  const isChecked = ((): boolean => {
    if (Object.values(data).some((product) => product.selected !== true)) return false;
    return true;
  })();

  if (cartContext === null) return null;

  const mallSelectHandler = () => {
    if (!isChecked) {
      cartContext.dispatch({
        type: 'MALL_SELECTED',
        mall: title,
      });
    } else {
      cartContext.dispatch({
        type: 'MALL_UNSELECTED',
        mall: title,
      });
    }
  };
  return (
    <S.Wrap>
      <S.Label htmlFor="mall">
        <S.CheckBox type="checkbox" id="mall" onChange={mallSelectHandler} checked={isChecked} />
        <S.Title>{title}</S.Title>
      </S.Label>
      {Object.entries(data).map(([key, value]) => (
        <Product key={key} mall={title} title={key} data={value} />
      ))}
    </S.Wrap>
  );
};

export default Mall;

const S = {
  Wrap: styled.div`
    margin-bottom: 20px;
    background-color: white;
  `,
  Label: styled.label`
    display: block;
    border-bottom: 1px solid ${ColorSet.borderGray};
    padding: 10px;
  `,
  Title: styled.h2`
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
  `,
  CheckBox: styled.input`
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: white;
    color-scheme: light;
    &:checked {
      border: none;
      accent-color: ${ColorSet.backgroundYellow};
    }
  `,
};
