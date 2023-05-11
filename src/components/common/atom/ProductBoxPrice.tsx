import React from 'react';
import styled from 'styled-components';

const StyledProductBoxPrice = styled.span`
  font-size: 1.3em;
  font-weight: 700;
  color: '#111';
`;

function ProductBoxPrice({ price }: { price: number }) {
  return <StyledProductBoxPrice>{price.toLocaleString('ko-KR')}원</StyledProductBoxPrice>;
}

export default ProductBoxPrice;
