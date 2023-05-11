import React from 'react';
import styled from 'styled-components';
import ProductBoughtUserProfileList from './ProductBoughtUserProfileList';
import ProductBuyerNumber from '../atom/ProductBuyerNumber';

const StyledProductBoxAboutBoughtUser = styled.span`
  display: flex;
  align-items: center;
`;

interface ProductBoxAboutBoughtUserInterface {
  profiles: string[];
  groupDiscountUserCount: number;
}
function ProductBoxAboutBoughtUser({ profiles, groupDiscountUserCount }: ProductBoxAboutBoughtUserInterface) {
  return (
    <StyledProductBoxAboutBoughtUser>
      <ProductBoughtUserProfileList profileUrlList={profiles} />
      <ProductBuyerNumber buyer={groupDiscountUserCount} />
    </StyledProductBoxAboutBoughtUser>
  );
}

export default ProductBoxAboutBoughtUser;
