import React from 'react';
import styled from 'styled-components';
import IProductDetail from '@interfaces/Detail';
import ProductDetailContext from 'src/context/ProductDetailContext';
import ProductOptionsContextProvider from 'src/context/ProductOptionsContext';
import fetchData from 'src/utils/fetchData';
import MainSection from './mainSection/MainSection';
import SideSection from './sideSection/SideSection';

const productId = window.location.search;
const fetcher = fetchData<IProductDetail>(`/detail/${productId}`);
const DetailLayout = () => {
  const data = fetcher.read();
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
