import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ColorSet } from 'src/utils/constant';

const DeliveryFee = () => {
  const data = useContext(ProductDetailContext);
  if (data === null) return <S.Skeleton />;
  return (
    <S.Wrap>
      <S.TxtInfo>
        {data.delivery.deliveryFeeType === 'FREE' ? '배송비 무료' : `배송비 ${data.delivery.deliveryFee}원`}
      </S.TxtInfo>
      {data.delivery.availableIsolatedArea && data.delivery.isolatedAreaAdditionalFee && (
        <S.TxtInfo>
          제주 추가 {data.delivery.jejuAreaAdditionalFee}원/ 제주 외 도서지역 추가{' '}
          {data.delivery.isolatedAreaAdditionalFee}원
        </S.TxtInfo>
      )}
    </S.Wrap>
  );
};

export default DeliveryFee;

const S = {
  Skeleton: styled.div`
    margin-top: 20px;
    background-color: gray;
  `,
  Wrap: styled.div`
    margin-top: 20px;
    line-height: 25px;
  `,
  TxtInfo: styled.div`
    color: ${ColorSet.textBlack};
  `,
};
