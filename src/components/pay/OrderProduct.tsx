import React from 'react';
import { IShopItem } from 'src/utils/localStorage';
import styled from 'styled-components';
import OrderOption from './OrderOption';

const OrderProduct = ({ title, data }: { title: string; data: IShopItem }) => {
  return (
    <>
      <S.Description>
        <S.Img src={data.productImage} width={70} height={70} />
        <span>{title}</span>
      </S.Description>
      {Object.entries(data.options).map(([key, value]) => (
        <OrderOption key={key} data={value} />
      ))}
    </>
  );
};

export default OrderProduct;

const S = {
  Description: styled.li`
    display: flex;
    align-items: center;
    font-weight: 600;
  `,
  Img: styled.img`
    border-radius: 5px;
    margin: 10px 0;
  `,
};
