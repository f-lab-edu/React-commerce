import React from 'react';
import styled from 'styled-components';

interface tagInterface {
  content: string;
}

const StyledProductBoxTag = styled.span<tagInterface>`
  ${(props): string => {
    if (props.content === '무료배송') {
      return 'background-color: #f2f6f8;';
    }
    if (/^마감/.test(props.content)) {
      return 'background-color: #333;';
    }
    return 'background-color: #fbefaa;';
  }}
  color:rgba(24,32,55,.7);
  display: inline-block;
  border-radius: 1px;
  padding: 0 5px;
  font-size: 11px;
  line-height: 22px;
  margin-right: 5px;
`;
function ProductBoxTag({ content }: tagInterface) {
  return <StyledProductBoxTag content={content}>{content}</StyledProductBoxTag>;
}

export default ProductBoxTag;
