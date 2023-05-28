import React from 'react';
import styled from 'styled-components';
import { ISelectedProduct, ISelectedProducts } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';

const OptionSelectResult = ({ products }: { products: ISelectedProducts }) => {
  return (
    <S.OptionResult>
      <span>총 수량 {Object.values(products).reduce((prev: number, cur: ISelectedProduct) => prev + cur.count, 0)}개</span>
      <span>
        총 주문금액{' '}
        <S.em>
          {Object.values(products)
            .reduce((prev: number, cur: ISelectedProduct) => prev + cur.totalPrice, 0)
            .toLocaleString('ko-KR')}
        </S.em>
        원
      </span>
    </S.OptionResult>
  );
};

export default OptionSelectResult;

const S = {
  OptionResult: styled.div`
    margin: 20px 0;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  `,
  em: styled.em`
    font-weight: 700;
    color: ${ColorSet.textRed};
  `,
};
