import React, { useState } from 'react';
import styled from 'styled-components';

import { ColorSet } from 'src/utils/constant';

interface ICalculatedCartData {
  checked: boolean;
  count: number;
  optionPrice: {
    originTotalPrice: number;
    totalPrice: number;
  };
}
const PaymentInformation = ({ calculatedCartData }: { calculatedCartData: ICalculatedCartData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <S.OrderWrap>
      <S.Order onClick={() => setToggle(!toggle)} toggle={toggle}>
        <S.Strong>결제금액</S.Strong>
      </S.Order>
      {toggle && (
        <S.OrderRecipt>
          <S.OrderReciptItem>
            <span>선택 상품금액({calculatedCartData.count})개</span>
            <span>{calculatedCartData.optionPrice.originTotalPrice.toLocaleString()}원</span>
          </S.OrderReciptItem>
          <S.OrderReciptItem>
            <S.DataTitle>할인 예상금액 합계</S.DataTitle>
            <S.DataDef>
              <S.Em>{(calculatedCartData.optionPrice.totalPrice - calculatedCartData.optionPrice.originTotalPrice).toLocaleString()}원</S.Em>
            </S.DataDef>
          </S.OrderReciptItem>
          <S.OrderReciptItem>
            <S.DataTitle>
              <S.Strong>총 주문금액</S.Strong>
            </S.DataTitle>
            <S.DataDef>{calculatedCartData.optionPrice.totalPrice.toLocaleString()}원</S.DataDef>
          </S.OrderReciptItem>
        </S.OrderRecipt>
      )}
    </S.OrderWrap>
  );
};

export default PaymentInformation;

const S = {
  OrderWrap: styled.div`
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid ${ColorSet.borderGray};
  `,
  Order: styled.div<{ toggle: boolean }>`
    line-height: 40px;
    position: relative;
    &:after {
      position: absolute;
      right: 10px;
      font-weight: 400;
      font-size: 14px;
      display: inline-block;
      content: '>';
      transform: rotate(${(props) => (props.toggle ? '-90deg' : '90deg')});
    }
  `,
  Em: styled.em`
    color: ${ColorSet.textBlue};
  `,
  Strong: styled.em`
    font-size: 18px;
    font-weight: 600;
  `,
  OrderRecipt: styled.ul`
    line-height: 30px;
  `,
  OrderReciptItem: styled.li`
    font-size: 14px;
    font-weight: 600;
    display: flex;
    padding: 10px 0;
    margin: 0 10px;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px dashed ${ColorSet.borderGray};
    }
  `,
  DataTitle: styled.span``,
  DataDef: styled.span``,
};
