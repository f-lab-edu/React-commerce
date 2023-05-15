import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';
import IProductDetail from '@interfaces/Detail';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';
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
  const { search } = useLocation();
  const [load, setLoad] = useState(false);
  const data = useFetch<IProductDetail>(`/detail/${search}`);
  useEffect(() => {
    setLoad(true);
  }, [data]);

  if (load && data) {
    return (
      <S.MainSection>
        <ProductDetailContext.Provider value={data}>
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
        </ProductDetailContext.Provider>
      </S.MainSection>
    );
  }
  return <div>로디이이잉</div>;
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
