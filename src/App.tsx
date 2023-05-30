import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@components/main/organism/Header';
import ScrollUpModal from '@components/common/atom/ScrollUpModal';
import { ErrorBoundary } from 'react-error-boundary';
import FetchErrorFallback from '@components/common/organism/ErrorFallback';

function App() {
  return (
    <ErrorBoundary fallback={<FetchErrorFallback title="네트워크 요청에 실패하였습니다." />}>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <ScrollUpModal />
    </ErrorBoundary>
  );
}

export default App;

const Layout = styled.div`
  padding-top: 80px;
`;
