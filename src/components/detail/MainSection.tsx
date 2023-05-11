import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';
import IProductDetail from '@interfaces/Detail';
import { ColorSet } from 'src/utils/constant';
import PriceBox from './PriceBox';
import ReviewAverageRating from './ReviewAverageRating';
import Title from './Title';

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
        <S.ProductInfoWrap>
          <img src={data?.image.images[0]} width={430} height={430} />
          <S.ProductInfo>
            <ReviewAverageRating averageRating={data.review.averageRating} reviewCount={data.review.reviewCount} />
            <Title name={data.name} content={data.originArea?.content} />
            <PriceBox standardPrice={data.price.standardPrice} discountPrice={data.talkDeal?.discountPrice} />
          </S.ProductInfo>
        </S.ProductInfoWrap>
        <S.ProductDescriptionNav>
          <S.ProductDescriptionNavItem className="activate">상세정보</S.ProductDescriptionNavItem>
          <S.ProductDescriptionNavItem>
            리뷰 {data?.review.reviewCount.toLocaleString('ko-KR')}
          </S.ProductDescriptionNavItem>
          <S.ProductDescriptionNavItem>
            문의 {data?.review.qnaCount.toLocaleString('ko-KR')}
          </S.ProductDescriptionNavItem>
        </S.ProductDescriptionNav>
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
  ProductDescriptionNav: styled.ul`
    display: flex;
    .activate {
      color: white;
      background-color: ${ColorSet.textBlack};
    }
  `,
  ProductDescriptionNavItem: styled.li`
    flex: 1;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    list-style: none;
  `,
  ProductDescription: styled.div`
    width: 900px;
    height: 2200px;
    overflow: hidden;
  `,
};
