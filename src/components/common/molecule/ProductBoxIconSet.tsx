import React from 'react';
import styled from 'styled-components';
import ProductBoxLike from '../atom/ProductBoxLike';
import ProductBoxShare from '../atom/ProductBoxShare';

const StyledProductBoxIconSet = styled.span`
  display: flex;
  align-items: center;
  width: 80px;
  height: 30px;
`;
function ProductBoxIconSet({ productName }: { productName: string }) {
  return (
    <StyledProductBoxIconSet>
      <ProductBoxShare />
      <ProductBoxLike productName={productName} />
    </StyledProductBoxIconSet>
  );
}

export default ProductBoxIconSet;
