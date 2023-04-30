import React from 'react';
import styled from 'styled-components';

const StyledProductBoughtUserProfile = styled.div<{ index: number }>`
  width: 20px;
  height: 20px;
  display: inline-block;
  overflow: hidden;
  border-radius: 7px;
  background-color: rgb(203, 183, 195);
  ${(props) => `transform: translateX(-${props.index * 6}px)`}
`;
function ProductBoughtUserProfile({ profileUrl, index }: { profileUrl: string; index: number }) {
  return (
    <StyledProductBoughtUserProfile index={index}>
      <img src={profileUrl} alt="상품 구매 유저 프로필" width={20} height={20} />
    </StyledProductBoughtUserProfile>
  );
}

export default ProductBoughtUserProfile;
