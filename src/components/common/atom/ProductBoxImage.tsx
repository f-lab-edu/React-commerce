import React from 'react';
import styled from 'styled-components';

const StyledProductBoxImageWrap = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
  height: 50%;
`;

const StyledProductBoxImage = styled.img<productImgInterface>`
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.2);
  }
  transition: 0.3s;
`;
interface productImgInterface {
  src: string;
  alt: string;
}
function ProductBoxImage({ src, alt }: productImgInterface) {
  return (
    <StyledProductBoxImageWrap>
      <StyledProductBoxImage src={src} alt={alt} />
    </StyledProductBoxImageWrap>
  );
}

export default ProductBoxImage;
