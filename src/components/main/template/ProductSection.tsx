import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import { IproductWrap, Iproduct } from '@interfaces/product';
import ProductBox from '@components/common/organism/ProductBox';

const ProductSection = () => {
  const [products, setProducts] = useState<Iproduct[]>();
  useEffect(() => {
    axios.get('/product').then((response: AxiosResponse<{ data: IproductWrap }>) => {
      setProducts(response.data.data.products);
    });
  }, []);
  const productList = products?.map((product: Iproduct) => {
    return <ProductBox {...product} />;
  });
  return <S.ProductListWrap>{productList}</S.ProductListWrap>;
};

const S = {
  ProductListWrap: styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
};
export default ProductSection;
