import React from 'react';
import styled from 'styled-components';
import SubCategorySet from '@components/main/atom/SubCategorySet';
import CategoryItemGroup from '../molecule/CategoryItemGroup';
import HeaderIconGroup from '../molecule/HeaderIconGroup';
import HeaderLogin from '../atom/HeaderLogin';

function Header() {
  return (
    <S.Header>
      <S.InnerHeader>
        <span>아이콘</span>
        <CategoryItemGroup />
        <SubCategorySet />
        <HeaderIconGroup />
        <HeaderLogin />
      </S.InnerHeader>
    </S.Header>
  );
}

export default Header;

const S = {
  InnerHeader: styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 80px;
    width: 1280px;
    margin: 0 auto;
  `,
  Header: styled.div`
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
  `,
};
