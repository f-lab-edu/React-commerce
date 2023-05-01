import React from 'react';
import styled from 'styled-components';

const StyledProductBoxLike = styled.button`
  border: none;
  background-color: inherit;
  color: rgba(24, 32, 55, 0.7);
  font-size: 24px;
`;
function ProductBoxLike() {
  // 유저 정보 가져와서 라이크 unlike check
  // 로그인 안되어있으면 로그인 페이지로 이동
  return <StyledProductBoxLike>♡</StyledProductBoxLike>;
}

export default ProductBoxLike;
