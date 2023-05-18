import React from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import PriceBox from './PriceBox';
import ReviewAverageRating from './ReviewAverageRating';
import Title from './Title';
import ProductImageBox from './ProductImageBox';
import DeliveryFee from './DeliveryFee';
import ProductDetailNav from './ProductDetailNav';
import ProductDescription from './ProductDescription';
import ProductReviewContainer from './ProductReviewContainer';
import ProductInquiryContainer from './ProductInquiryContainer';

const MainSection = () => {
  return (
    <S.MainSection>
      <S.ProductInfoWrap>
        <ProductImageBox />
        <S.ProductInfo>
          <ReviewAverageRating />
          <Title />
          <PriceBox />
          <DeliveryFee />
        </S.ProductInfo>
      </S.ProductInfoWrap>
      <ProductDetailNav>
        <ProductDescription />
        <ProductReviewContainer />
        <ProductInquiryContainer />
      </ProductDetailNav>
    </S.MainSection>
  );
};

export default MainSection;

const S = {
  MainSection: styled.div`
    width: 900px;
    border-right:1px solid ${ColorSet.borderGray};
    padding: 0 20px; 20px; 0;
    margin-top:20px;
  `,
  ProductInfoWrap: styled.div`
    display: flex;
    margin-bottom: 50px;
  `,
  ProductInfo: styled.div`
    flex: 1;
    margin-left: 20px;
  `,
};
