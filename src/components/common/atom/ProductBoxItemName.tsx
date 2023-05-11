import React from 'react';
import styled from 'styled-components';

const StyledProductBoxItemName = styled.strong`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
`;
function ProductBoxItemName({ content }: { content: String }) {
  return <StyledProductBoxItemName>{content}</StyledProductBoxItemName>;
}

export default ProductBoxItemName;
