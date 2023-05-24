import React, { useContext, useState, useEffect } from 'react';
import { IShopItems, IShopItem } from 'src/utils/localStorage';
import { ColorSet } from 'src/utils/constant';
import CartContext from 'src/context/CartContext';
import styled from 'styled-components';
import Product from './Product';

const Mall = ({ title, data }: { title: string; data: IShopItems }) => {
  const localStorageData = useContext(CartContext);
  const isChecked = ((): boolean => {
    if (Object.keys(data).length === Object.values(data).reduce((prev: number, cur: IShopItem) => (cur.selected ? prev + 1 : prev), 0)) {
      return true;
    }
    return false;
  })();

  if (localStorageData === null) return null;

  const mallSelectHandler = () => {
    if (!isChecked) {
      localStorageData.dispatch({
        type: 'MALL_SELECTED',
        mall: title,
      });
    } else {
      localStorageData.dispatch({
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
