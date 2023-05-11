import React from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductBoxShare from '@components/common/atom/ProductBoxShare';
import Price from './Price';

interface Props {
  standardPrice: number;
  discountPrice: number;
}
const PriceBox = ({ standardPrice, discountPrice }: Props) => {
  return (
    <S.Wrap>
      {discountPrice ? (
        <>
          <Price type={false} content={`${standardPrice.toLocaleString('ko-KR')}원`} />
          <Price type content={`톡딜가 ${discountPrice.toLocaleString('ko-KR')}원~`} />
        </>
      ) : (
        <S.NormalPrice>{`${standardPrice.toLocaleString('ko-KR')}원`}</S.NormalPrice>
      )}
      <S.Share />
    </S.Wrap>
  );
};

export default PriceBox;

const S = {
  Wrap: styled.div`
    position: relative;
  `,
  NormalPrice: styled.span`
    font-weight: 700;
    font-size: 26px;
  `,
  Share: styled(ProductBoxShare)`
    classname: 'hello';
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    position: absolute;
    right: 0;
  `,
};
