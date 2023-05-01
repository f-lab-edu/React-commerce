import React from 'react';
import styled from 'styled-components';
import type product from '@interfaces/product';
import ProductBoxImage from '../atom/ProductBoxImage';
import ProductBoxItemName from '../atom/ProductBoxItemName';
import ProductBoxAboutPrice from '../molecule/ProductBoxAboutPrice';
import ProductTagList from '../molecule/ProductTagList';
import ProductBoxAboutBoughtUser from '../molecule/ProductBoxAboutBoughtUser';
import ProductBoxIconSet from '../molecule/ProductBoxIconSet';

const StyledProductBox = styled.li`
  @media screen and (max-width: 500px) {
    width: 100%;
    aspect-ratio: 1;
  }
  @media screen and (min-width: 501px) {
    position: relative;
    width: 300px;
    height: 300px;
  }
  list-style: none;
`;
const StyledProductBoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
function ProductBox({
  imageUrl,
  groupDiscountDisplayable,
  discountedPrice,
  originalPrice,
  freeDelivery,
  label,
  productName,
  profiles,
  groupDiscountUserCount,
}: product) {
  return (
    <StyledProductBox>
      <ProductBoxImage src={imageUrl} alt={productName} />
      <ProductTagList freeDelivery={freeDelivery} label={label} />
      <ProductBoxItemName content={productName} />
      <ProductBoxAboutPrice
        specialDeal={groupDiscountDisplayable}
        originPrice={originalPrice}
        discountPrice={discountedPrice}
      />
      <StyledProductBoxFooter>
        <ProductBoxAboutBoughtUser profiles={profiles} groupDiscountUserCount={groupDiscountUserCount} />
        <ProductBoxIconSet />
      </StyledProductBoxFooter>
    </StyledProductBox>
  );
}

export default ProductBox;
