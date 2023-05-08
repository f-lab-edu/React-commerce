import React, { useEffect, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import { IproductWrap, Iproduct } from '@interfaces/product';
// import ProductBox from '@components/common/organism/ProductBox';
const ProductBox = lazy(() => import('@components/common/organism/ProductBox'));
const loading = () => <div>로딩중</div>;

const ProductSection = () => {
  const [products, setProducts] = useState<Iproduct[]>();
  useEffect(() => {
    axios.get('/product').then((response: AxiosResponse<{ data: IproductWrap }>) => {
      setTimeout(() => {
        setProducts(response.data.data.products);
      }, 3000);
    });
  }, []);
  const productList = products?.map((product: Iproduct) => {
    return (
      <Suspense fallback={loading()}>
        <ProductBox {...product} />
      </Suspense>
    );
  });
  return (
    <Suspense fallback={loading()}>
      <S.ProductListWrap>{productList}</S.ProductListWrap>
    </Suspense>
  );
};

const S = {
  ProductListWrap: styled.ul`
    display: flex;
    flex-wrap: wrap;
  `,
};
export default ProductSection;
