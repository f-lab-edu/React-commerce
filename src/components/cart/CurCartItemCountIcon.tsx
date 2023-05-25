import React from 'react';
import { ColorSet } from 'src/utils/constant';
import { ICart, getLocalStorage } from 'src/utils/localStorage';
import styled from 'styled-components';

const CurCartItemCountIcon = () => {
  const cartData = getLocalStorage<ICart>('cart');
  if (cartData === null) return null;
  return <S.IconWrap>{Object.values(cartData).length}</S.IconWrap>;
};

export default CurCartItemCountIcon;

const S = {
  IconWrap: styled.span`
    display: inline-block;
    position: absolute;
    left: 30px;
    top: -15px;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: white;
    background-color: ${ColorSet.textRed};
    text-align: center;
    box-sizing: border-box;
  `,
};
