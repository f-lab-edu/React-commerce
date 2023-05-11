import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';

interface Props {
  averageRating: number;
  reviewCount: number;
}
const ReviewAverageRating = () => {
  const data = useContext(ProductDetailContext);
  if (data === null) return null;
  return (
    <S.ProductRating>
      {typeof data.review?.averageRating === 'number' && (
        <S.ProductStar>
          {'★'.repeat(data.review.averageRating) + '☆'.repeat(4 - data.review.averageRating)}
        </S.ProductStar>
      )}
      <S.ProductReviewCount> 리뷰 {data.review?.reviewCount}건</S.ProductReviewCount>
    </S.ProductRating>
  );
};

export default ReviewAverageRating;

const S = {
  ProductRating: styled.div`
    color: ${ColorSet.textBlue};
    margin-bottom: 10px;
  `,
  ProductStar: styled.span`
    font-size: 26px;
  `,
  ProductReviewCount: styled.span`
    font-size: 14px;
  `,
};
