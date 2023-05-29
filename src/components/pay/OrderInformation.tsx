import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import { getLocalStorage, type IShop } from 'src/utils/localStorage';
import OrderMall from './OrderMall';

const OrderInformation = () => {
  const mallData = getLocalStorage<IShop>('cart');
  const [isShow, setIsShow] = useState<boolean>(true);
  if (mallData === null) return null;

  const possibleMall = Object.keys(mallData).filter((key) => {
    return Object.values(mallData[key]).some((product) => product.selected);
  });

  return (
    <S.Wrap>
      <S.Title isShow={isShow} onClick={() => setIsShow((prev) => !prev)}>
        주문상품 정보
      </S.Title>
      {isShow && (
        <>
          {possibleMall.map((key) => (
            <OrderMall key={key} title={key} data={mallData[key]} />
          ))}
        </>
      )}
    </S.Wrap>
  );
};

export default OrderInformation;

const S = {
  Wrap: styled.div`
    background-color: white;
    margin-bottom: 5px;
    padding: 10px;
    border-bottom: 1px solid ${ColorSet.borderGray};
  `,
  Title: styled.div<{ isShow: boolean }>`
    position: relative;
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    &:after {
      display: inline-block;
      position: absolute;
      font-weight: 350;
      font-size: 14px;
      right: 10px;
      content: '>';
      transform: ${(props) => (props.isShow ? 'rotate(-90deg)' : 'rotate(90deg)')};
    }
  `,
};
