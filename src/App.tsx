import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@components/main/organism/Header';
import ScrollUpModal from '@components/common/atom/ScrollUpModal';

const Layout = styled.div`
  padding-top: 80px;
`;
function App() {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <ScrollUpModal />
    </>
  );
}

export default App;
