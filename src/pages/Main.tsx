import React from 'react';
import styled from 'styled-components';
import Header from '@components/main/organism/Header';
import Carousel from '@components/main/organism/Carousel';
import Layout from '@components/main/template/Layout';

const StyledMain = styled.div`
  padding: 80px 0 0 0;
`;

export default function Main() {
  return (
    <StyledMain>
      <Header />
      <Carousel />
      <Layout />
    </StyledMain>
  );
}
