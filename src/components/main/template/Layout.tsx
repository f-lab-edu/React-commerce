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
  width: 1440px;
`;
const StyledTitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  display: inline-block;
  border-bottom: 2px solid #f7e600;
  margin-bottom: 15px;
`;
const MainSection = styled.div`
  flex: 3;
  border-right: 1px solid #e7e8eb;
  padding: 0 20px;
`;
const SideSection = styled.div`
  flex: 1;
  box-sizing: border-box;
  margin: 0 50px;
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
