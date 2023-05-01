import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@components/main/organism/Header';

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
    </>
  );
}

export default App;
