import React from 'react';
import styled from 'styled-components';
import SubCategorySet from '@components/main/atom/SubCategorySet';
import CategoryItemGroup from '../molecule/CategoryItemGroup';
import HeaderIconGroup from '../molecule/HeaderIconGroup';
import HeaderLogin from '../atom/HeaderLogin';

const StyledInnerHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 80px;
  width: 1280px;
  margin: 0 auto;
`;
const StyledHeader = styled.div`
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledInnerHeader>
        <span>아이콘</span>
        <CategoryItemGroup />
        <SubCategorySet />
        <HeaderIconGroup />
        <HeaderLogin />
      </StyledInnerHeader>
    </StyledHeader>
  );
}

export default Header;
