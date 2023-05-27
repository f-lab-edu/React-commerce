import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import OrderInformation from '@components/pay/OrderInformation';
import Purchase from '@components/pay/Purchase';
import AddressForm from '@components/pay/AddressForm';
import PaymentInformation from '@components/pay/PaymentInformation';
import { ColorSet } from 'src/utils/constant';
import calculateCartData from 'src/utils/calculateCartData';
import { redirect } from 'react-router-dom';
import { getLocalStorage, type IShop } from 'src/utils/localStorage';
import { kakaoPay, tossPG } from 'src/api/purchase';

const cartData = getLocalStorage<IShop>('cart');

const calculatedCartData = cartData !== null ? calculateCartData(cartData) : { checked: false, count: 0, optionPrice: { totalPrice: 0, originTotalPrice: 0 } };
const orderProduct = cartData !== null ? Object.values(cartData).map((product) => Object.keys(product).filter((key) => product[key].selected)[0])[0] : '';

const Pay = () => {
  const [payTool, setPayTool] = useState<string>('kakao');

  if (cartData === null) return null;

  const payHandler = () => {
    if (payTool === 'kakao') {
      kakaoPay(`${orderProduct} ${calculatedCartData.count - 1 !== 0 ? `외 ${calculatedCartData.count - 1}개` : ''}`, calculatedCartData.count, calculatedCartData.optionPrice.totalPrice);
    } else {
      tossPG(payTool, `${orderProduct}  ${calculatedCartData.count - 1 !== 0 ? `외 ${calculatedCartData.count - 1}개` : ''}`, calculatedCartData.optionPrice.totalPrice);
    }
  };
  return (
    <S.Background>
      <S.Wrap>
        <S.Title>주문하기</S.Title>
        <AddressForm />
        <OrderInformation />
        <PaymentInformation calculatedCartData={calculatedCartData} />
        <Purchase setTool={setPayTool} />
        <S.PurchaseButton type="button" onClick={payHandler}>
          {calculatedCartData.optionPrice.totalPrice.toLocaleString()}원 결제하기
        </S.PurchaseButton>
      </S.Wrap>
    </S.Background>
  );
};

export default Pay;

const S = {
  Background: styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${ColorSet.backgroundGray};
    color: ${ColorSet.textBlack};
  `,
  Wrap: styled.div`
    padding: 30px 0;
    width: 870px;
    margin: 0 auto;
  `,
  Title: styled.div`
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid ${ColorSet.borderGray};
    background-color: white;
  `,
  PurchaseButton: styled.button`
    background-color: ${ColorSet.backgroundYellow};
    text-align: center;
    font-weight: 700;
    border: none;
    width: 100%;
    font-size: 18px;
    line-height: 50px;
  `,
};
