import React from 'react';
import styled from 'styled-components';

const StyledProductBuyerNumber = styled.span`
  color: rgba(24, 32, 55, 0.7);
  font-size: 14px;
`;
function ProductBuyerNumber({ buyer }: { buyer: number }) {
  return <StyledProductBuyerNumber>{buyer.toLocaleString('ko-KR')}명이 구매했어요</StyledProductBuyerNumber>;
}

export default ProductBuyerNumber;
