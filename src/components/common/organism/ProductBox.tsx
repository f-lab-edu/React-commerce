import React from 'react';
import styled from 'styled-components';
import type { Iproduct } from '@interfaces/product';
import { Link } from 'react-router-dom';
import ProductBoxImage from '../atom/ProductBoxImage';
import ProductBoxItemName from '../atom/ProductBoxItemName';
import ProductBoxAboutPrice from '../molecule/ProductBoxAboutPrice';
import ProductTagList from '../molecule/ProductTagList';
import ProductBoxAboutBoughtUser from '../molecule/ProductBoxAboutBoughtUser';
import ProductBoxIconSet from '../molecule/ProductBoxIconSet';

const StyledProductBox = styled.li`
  position: relative;
  width: 320px;
  height: 320px;
  list-style: none;
`;
const StyledProductBoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

const StyledProdcutBoxWrap = styled(Link)`
  text-decoration: none;
  color: black;
`;
function ProductBox({
  imageUrl,
  groupDiscountDisplayable,
  groupDiscountedPrice,
  originalPrice,
  freeDelivery,
  label,
  productName,
  mainCopy,
  profiles,
  groupDiscountUserCount,
}: Iproduct) {
  return (
    <StyledProductBox>
      <StyledProdcutBoxWrap to="">
        <ProductBoxImage src={imageUrl} alt={productName} />
        <ProductTagList freeDelivery={freeDelivery} label={label} />
        <ProductBoxItemName content={mainCopy} />
        <ProductBoxAboutPrice
          specialDeal={groupDiscountDisplayable}
          originPrice={originalPrice}
          discountPrice={groupDiscountedPrice}
        />
        <StyledProductBoxFooter>
          <ProductBoxAboutBoughtUser profiles={profiles} groupDiscountUserCount={groupDiscountUserCount} />
          <ProductBoxIconSet />
        </StyledProductBoxFooter>
      </StyledProdcutBoxWrap>
    </StyledProductBox>
  );
}

export default ProductBox;
