import React from 'react';
import styled from 'styled-components';
import ProductBoxPriceType from '../atom/ProductBoxPriceType';
import ProductBoxPrice from '../atom/ProductBoxPrice';
import ProductBoxOriginPrice from '../atom/ProductBoxOriginPrice';

interface priceInterface {
  specialDeal: boolean;
  discountPrice: number;
  originPrice?: number;
}
const StyledProductBoxAboutPrice = styled.div`
  margin-top: 7px;
`;
function ProductBoxAboutPrice({ specialDeal, discountPrice, originPrice }: priceInterface) {
  return (
    <StyledProductBoxAboutPrice>
      {specialDeal && <ProductBoxPriceType />}
      <ProductBoxPrice price={discountPrice} />
      {originPrice && <ProductBoxOriginPrice price={originPrice} />}
    </StyledProductBoxAboutPrice>
  );
}

export default ProductBoxAboutPrice;
