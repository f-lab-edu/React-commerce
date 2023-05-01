import React from 'react';
import styled from 'styled-components';
import ProductBoxLike from '../atom/ProductBoxLike';
import ProductBoxShare from '../atom/ProductBoxShare';

const StyledProductBoxIconSet = styled.span`
  display: flex;
  align-items: center;
`;
function ProductBoxIconSet() {
  return (
    <StyledProductBoxIconSet>
      <ProductBoxShare />
      <ProductBoxLike />
    </StyledProductBoxIconSet>
  );
}

export default ProductBoxIconSet;
