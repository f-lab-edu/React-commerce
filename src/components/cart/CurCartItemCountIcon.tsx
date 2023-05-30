import React, { useEffect, useState } from 'react';
import { ColorSet } from 'src/utils/constant';
import { getLocalStorage, type IShop } from 'src/utils/localStorage';
import styled from 'styled-components';

const CurCartItemCountIcon = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const update = () => {
      const cartData = getLocalStorage<IShop>('cart');
      cartData && setCount(Object.keys(cartData).length);
    };
    window.addEventListener('cartChange', update);
    return () => window.removeEventListener('cartChange', update);
  }, []);

  if (count === 0) return null;
  return <S.IconWrap>{count}</S.IconWrap>;
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
