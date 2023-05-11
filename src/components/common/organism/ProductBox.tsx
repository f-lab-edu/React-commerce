import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import type Iproduct from '@interfaces/product';
import { Link } from 'react-router-dom';
import useIntersectionObserve from 'src/hooks/useIntersectionObserve';
import ProductBoxImage from '../atom/ProductBoxImage';
import ProductBoxItemName from '../atom/ProductBoxItemName';
import ProductBoxAboutPrice from '../molecule/ProductBoxAboutPrice';
import ProductTagList from '../molecule/ProductTagList';
import ProductBoxAboutBoughtUser from '../molecule/ProductBoxAboutBoughtUser';
import ProductBoxIconSet from '../molecule/ProductBoxIconSet';

interface Props extends Iproduct {
  isLast: boolean;
  fetchMoreProducts: () => void;
}
const ProductBox = ({
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
  isLast,
  fetchMoreProducts,
}: Props) => {
  const target = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserve(target, {});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLast && isIntersecting && fetchMoreProducts();
  }, [isLast, isIntersecting]);
  return (
    <S.ProductBox ref={target}>
      <S.ProdcutBoxWrap to="">
        <ProductBoxImage src={imageUrl} alt={productName} />
        <ProductTagList freeDelivery={freeDelivery} label={label} />
        <ProductBoxItemName content={mainCopy} />
        <ProductBoxAboutPrice
          specialDeal={groupDiscountDisplayable}
          originPrice={originalPrice}
          discountPrice={groupDiscountedPrice}
        />
        <S.ProductBoxFooter>
          <ProductBoxAboutBoughtUser profiles={profiles} groupDiscountUserCount={groupDiscountUserCount} />
          <ProductBoxIconSet />
        </S.ProductBoxFooter>
      </S.ProdcutBoxWrap>
    </S.ProductBox>
  );
};

const S = {
  ProductBox: styled.li`
    position: relative;
    width: 284px;
    height: 320px;
    list-style: none;
    padding: 0 10px 10px 0;
  `,
  ProductBoxFooter: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  `,
  ProdcutBoxWrap: styled(Link)`
    text-decoration: none;
    color: black;
  `,
};

export default ProductBox;
