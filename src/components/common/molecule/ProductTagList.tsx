import React from 'react';
import styled from 'styled-components';
import ProductBoxTag from '../atom/ProductBoxTag';

interface TagListInterface {
  freeDelivery: boolean;
  label: string;
}
const StyledProductTagList = styled.div`
  margin-bottom: 8px;
`;
function ProductTagList({ freeDelivery, label }: TagListInterface) {
  return (
    <StyledProductTagList>
      {freeDelivery && <ProductBoxTag content="무료배송" />}
      {label !== '' && <ProductBoxTag content={label} />}
    </StyledProductTagList>
  );
}

export default ProductTagList;
