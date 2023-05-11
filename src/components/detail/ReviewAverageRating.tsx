import React from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';

interface Props {
  averageRating: number;
  reviewCount: number;
}
const ReviewAverageRating = ({ averageRating, reviewCount }: Props) => {
  return (
    <S.ProductRating>
      <S.ProductStar>{'★'.repeat(averageRating) + '☆'.repeat(4 - averageRating)}</S.ProductStar>
      <S.ProductReviewCount> 리뷰 {reviewCount}건</S.ProductReviewCount>
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
