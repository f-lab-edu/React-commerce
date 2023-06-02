import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';
import IProductDetail from '@interfaces/detailType';
import ProductDetailContext from 'src/context/ProductDetailContext';
import ProductOptionsContextProvider from 'src/context/ProductOptionsContext';
import MainSection from './mainSection/MainSection';
import SideSection from './sideSection/SideSection';

const DetailLayout = () => {
  const { search } = useLocation();
  const data = useFetch<IProductDetail>(`/detail/${search}`);
  if (data === undefined) return null;
  // eslint-disable-next-line
  data['productId'] = search.split('=')[1];
  return (
    <S.Wrap>
      <ProductDetailContext.Provider value={data}>
        <MainSection />
        <ProductOptionsContextProvider>
          <SideSection />
        </ProductOptionsContextProvider>
      </ProductDetailContext.Provider>
    </S.Wrap>
  );
};

export default DetailLayout;

const S = {
  Wrap: styled.div`
    display: flex;
  `,
  MainSection: styled.div``,
};
