import React from 'react';
import styled from 'styled-components';
import Header from '@components/main/organism/Header';
import Carousel from '@components/main/organism/Carousel';

const StyledMain = styled.div`
  display: flex;
  padding: 80px 0 0 0;
`;
export default function Main() {
  return (
    <StyledMain>
      <Header />
      <Carousel />
    </StyledMain>
  );
}
