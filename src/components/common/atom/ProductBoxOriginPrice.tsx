import React from 'react';
import styled from 'styled-components';

const StyledProductBoxOriginPrice = styled.span`
  margin-left: 5px;
  color: rgba(24, 32, 55, 0.7);
`;

function ProductBoxOriginPrice({ price }: { price: number }) {
  return <StyledProductBoxOriginPrice>{price.toLocaleString('ko-KR')}원</StyledProductBoxOriginPrice>;
}

export default ProductBoxOriginPrice;
