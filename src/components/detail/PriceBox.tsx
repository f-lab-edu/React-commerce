import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductBoxShare from '@components/common/atom/ProductBoxShare';
import ProductDetailContext from 'src/context/ProductDetailContext';
import Price from './Price';

const PriceBox = () => {
  const data = useContext(ProductDetailContext);
  if (data === null) return null;
  return (
    <S.Wrap>
      {data.talkDeal ? (
        <>
          <Price type={false} content={`${data.price?.standardPrice.toLocaleString('ko-KR')}원`} />
          <Price type content={`톡딜가 ${data.talkDeal.discountPrice.toLocaleString('ko-KR')}원~`} />
        </>
      ) : (
        <S.NormalPrice>{`${data.price?.standardPrice.toLocaleString('ko-KR')}원`}</S.NormalPrice>
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
