import React from 'react';
import styled from 'styled-components';
import Layout from '@components/main/template/Layout';
import Carousel from '@components/main/organism/Carousel';

export default function Main() {
  return (
    <>
      <Carousel />
      <Layout />;
    </>
  );
}
