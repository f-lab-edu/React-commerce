import React from 'react';
import styled from 'styled-components';
import CategoryItemGroup from '../molecule/CategoryItemGroup';

const StyledHeader = styled.div`
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  height: 80px;
`;
function Header() {
  return (
    <StyledHeader>
      <div>쇼핑하기 아이콘</div>
      <CategoryItemGroup />
    </StyledHeader>
  );
}

export default Header;
