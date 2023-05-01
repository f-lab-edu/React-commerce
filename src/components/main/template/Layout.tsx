import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  display: flex;
  margin: 0 120px;
`;
const MainSection = styled.div`
  flex: 3;
`;
const SideSection = styled.div`
  flex: 1;
`;
function Layout() {
  return (
    <StyledMainLayout>
      <MainSection>메인 사이드 무한 스크롤</MainSection>
      <SideSection>광고 사이드 페이지네이션</SideSection>
    </StyledMainLayout>
  );
}

export default Layout;
