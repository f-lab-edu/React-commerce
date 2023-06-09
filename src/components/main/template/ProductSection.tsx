import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Iproduct from '@interfaces/product';
import ProductBox from '@components/common/organism/ProductBox';
import fetch from 'src/api/fetch';
import Spinner from '@components/common/atom/Spinner';
import { ColorSet } from 'src/utils/constant';

const ProductSection = () => {
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const fetchProduct = async () => {
    try {
      setIsLoad(true);
      const response = await fetch<Iproduct[]>(`/product/?page=${page}`, 'GET');
      response.length === 0 && setIsLast(true);
      setProducts([...products, ...response]);
      setIsLoad(false);
    } catch (e) {
      setHasError(true);
      setIsLoad(false);
    }
  };
  useEffect(() => {
    !isLast && fetchProduct();
  }, [page]);

  if (hasError) {
    return (
      <S.ErrorComponent>
        <h2>상품데이터를 불러오는것에 실패하였습니다.</h2>
        <S.ErrorButton
          type="button"
          onClick={() => {
            setHasError(false);
            fetchProduct();
          }}
        >
          다시 시도하기
        </S.ErrorButton>
      </S.ErrorComponent>
    );
  }
  if (isLoad) {
    return (
      <S.ProductListWrap>
        <Spinner />
      </S.ProductListWrap>
    );
  }
  return (
    <S.ProductListWrap>
      {products.map((product: Iproduct, index, { length }) => (
        <ProductBox {...product} isLast={index + 1 === length} fetchMoreProducts={() => setPage((prev) => prev + 1)} />
      ))}
    </S.ProductListWrap>
  );
};

const S = {
  ProductListWrap: styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
  `,
  ErrorComponent: styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  `,
  ErrorButton: styled.button`
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    color: white;
    background-color: ${ColorSet.backgroundBlack};
  `,
};
export default ProductSection;
