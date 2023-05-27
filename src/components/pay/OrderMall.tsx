import React from 'react';
import styled from 'styled-components';
import { IShopItems } from 'src/utils/localStorage';
import OrderProduct from './OrderProduct';

const OrderMall = ({ title, data }: { title: string; data: IShopItems }) => {
  const possibleProduct = Object.keys(data).filter((key) => {
    return data[key].selected;
  });
  return (
    <div>
      <S.Title>
        <S.MallIcon />
        <span>{title}</span>
      </S.Title>
      {possibleProduct.map((key) => (
        <OrderProduct key={key} title={key} data={data[key]} />
      ))}
    </div>
  );
};

export default OrderMall;

const S = {
  MallIcon: styled.span`
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: 0px 4px 4px 0;
    background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230515/155501/ico_shoporder_220624.1071d1f468c267d7.png') no-repeat;
    background-position: -100px -45px;
    background-size: 150px 225px;
  `,
  Title: styled.span`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
  `,
};
