import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';

const OptionDeliveryFee = () => {
  const detailData = useContext(ProductDetailContext);

  return (
    <S.DeliveryFeeSection>
      <S.DeliveryFeeBox>
        <S.DeliveryFeeTitle>배송방법</S.DeliveryFeeTitle>
        <S.DeliveryMethodType>
          {detailData?.delivery.deliveryMethodType === 'DELIVERY' && '택배배송'}
        </S.DeliveryMethodType>
      </S.DeliveryFeeBox>
      <S.DeliveryFeeBox>
        <S.DeliveryFeeTitle>배송비</S.DeliveryFeeTitle>
        <S.DeliveryFeeType>
          {detailData?.delivery.deliveryFeeType === 'FREE'
            ? '무료'
            : `${detailData?.delivery.deliveryFee.toLocaleString('ko-KR')}원`}
        </S.DeliveryFeeType>
      </S.DeliveryFeeBox>
      {detailData?.delivery.availableIsolatedArea && detailData.delivery.isolatedAreaAdditionalFee && (
        <S.AdditionalFeeInfo>
          제주 추가 {detailData.delivery.jejuAreaAdditionalFee?.toLocaleString('ko-KR')}원/ 제주 외 도서지역 추가{' '}
          {detailData.delivery.isolatedAreaAdditionalFee?.toLocaleString('ko-KR')}원
        </S.AdditionalFeeInfo>
      )}
    </S.DeliveryFeeSection>
  );
};

export default OptionDeliveryFee;

const S = {
  DeliveryFeeSection: styled.div`
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${ColorSet.borderGray};
  `,
  DeliveryFeeBox: styled.div`
    line-height: 40px;
    display: flex;
  `,
  DeliveryFeeTitle: styled.span`
    display: inline-block;
    color: ${ColorSet.textBlack};
    width: 70px;
    font-size: 16px;
    font-weight: 700;
  `,
  DeliveryMethodType: styled.span``,
  DeliveryFeeType: styled.span`
    display: inline-block;
    flex: 1;
    color: ${ColorSet.textGray};
    padding-left: 10px;
    background-color: ${ColorSet.backgroundGray};
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 5px;
  `,
  AdditionalFeeInfo: styled.div`
    margin-top: 20px;
    color: ${ColorSet.textGray};
    font-size: 14px;
  `,
};
