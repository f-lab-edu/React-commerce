import React, { Suspense } from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';

const DetailLayout = () => {
  return (
    <S.Wrap>
      <Suspense fallback={<h2>로딩중</h2>}>
        <MainSection />
      </Suspense>
    </S.Wrap>
  );
};

export default DetailLayout;

const S = {
  Wrap: styled.div`
    display: flex;
    max-width: 1280px;
  `,
  MainSection: styled.div``,
};
