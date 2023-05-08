import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MemoizedMiddleNavbar } from '@components/common/organism/MiddleNavbar';
import ProductSection from './ProductSection';
import SpecialCard from '../molecule/SpecialCard';
import ReviewBestTalkDeal from '../organism/ReviewBestTalkDeal';

const StyledMainLayout = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  max-width: 1280px;
`;
const StyledTitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  display: inline-block;
  border-bottom: 2px solid #f7e600;
  margin-bottom: 15px;
`;
const MainSection = styled.div`
  border-right: 1px solid #e7e8eb;
  padding: 0 20px;
  width: 900px;
  flex-shrink: 0;
`;
const SideSection = styled.div`
  box-sizing: border-box;
  margin: 0 50px;
  width: 300px;
  flex-shrink: 0;
`;
function Layout() {
  return (
    <StyledMainLayout>
      <MainSection>
        <StyledTitle>오늘의 딜</StyledTitle>
        <MemoizedMiddleNavbar />
        <ProductSection />
      </MainSection>
      <SideSection>
        <SpecialCard />
        <ReviewBestTalkDeal />
      </SideSection>
    </StyledMainLayout>
  );
}

export default Layout;
