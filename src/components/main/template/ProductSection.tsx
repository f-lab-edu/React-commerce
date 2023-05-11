import React, { useEffect, useState, useRef, lazy } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Iproduct from '@interfaces/product';
import ProductBox from '@components/common/organism/ProductBox';

const ProductSection = () => {
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [islast, setIsLast] = useState<boolean>(false);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/product/?page=${page}`);
      setProducts([...products, ...response.data]);
    } catch (e) {
      setIsLast(true);
    }
  };

  useEffect(() => {
    !islast && fetchProduct();
  }, [page]);

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
  `,
};
export default ProductSection;
