import React from 'react';
import { ISelectedProduct } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const OrderOption = ({ data }: { data: ISelectedProduct }) => {
  return (
    <S.Wrap>
      <div>
        <S.Title>{data.value}</S.Title>
        <S.Option>
          [옵션] 선택: {data.options.join(',')} {data.count}개
        </S.Option>
      </div>
      <div>
        <S.OriginPrice>{data.originTotalPrice.toLocaleString()}원</S.OriginPrice>
        <S.Price>{data.totalPrice.toLocaleString()}원</S.Price>
      </div>
    </S.Wrap>
  );
};

export default OrderOption;

const S = {
  Wrap: styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid ${ColorSet.borderGray};
    padding: 20px;
    margin-bottom: 5px;
  `,
  Title: styled.div`
    font-weight: 500;
    line-height: 20px;
  `,
  Option: styled.span`
    color: ${ColorSet.textGray};
  `,
  OriginPrice: styled.span`
    color: ${ColorSet.textGray};
    text-decoration: line-through;
    font-size: 14px;
  `,
  Price: styled.span`
    display: block;
    font-weight: 500;
    font-size: 15px;
  `,
};
