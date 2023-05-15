import React, { useContext, useState } from 'react';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const ProductDetailNav = ({ children }: { children: React.ReactNode }) => {
  const data = useContext(ProductDetailContext);
  const [active, setActive] = useState(0);
  const listItem = [
    '상세정보',
    `리뷰 ${data?.review?.reviewCount.toLocaleString('ko-KR')}`,
    `문의 ${data?.review?.qnaCount.toLocaleString('ko-KR')} `,
  ];
  const target = React.Children.toArray(children).filter((child, i) => i === active)[0];
  return (
    <>
      <S.ProductDetailNav>
        {listItem.map((li, index) =>
          active === index ? (
            <S.ActiveProductDetailNavItem key={li}>{li}</S.ActiveProductDetailNavItem>
          ) : (
            <S.ProductDetailNavItem key={li} onClick={() => setActive(index)}>
              {li}
            </S.ProductDetailNavItem>
          )
        )}
      </S.ProductDetailNav>
      <div>{target}</div>
    </>
  );
};

export default ProductDetailNav;

const S = {
  ProductDetailNav: styled.ul`
    display: flex;
  `,
  ActiveProductDetailNavItem: styled.li`
    flex: 1;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    list-style: none;
    color: white;
    background-color: ${ColorSet.textBlack};
  `,
  ProductDetailNavItem: styled.li`
    flex: 1;
    line-height: 60px;
    text-align: center;
    font-weight: 600;
    list-style: none;
  `,
  ProductDescription: styled.div`
    width: 900px;
    height: 2200px;
    overflow: hidden;
  `,
};
