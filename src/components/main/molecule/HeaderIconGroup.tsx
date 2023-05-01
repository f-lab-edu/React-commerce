import React from 'react';
import styled from 'styled-components';
import HeaderIcon from '../atom/HeaderIcon';

const StyledHeaderIconGroup = styled.div`
  margin-left: auto;
  &:after {
    content: '';
    width: 1px;
    height: 28px;
    display: inline-block;
    border-right: 1px solid #ddd;
  }
`;

function HeaderIconGroup() {
  return (
    <StyledHeaderIconGroup>
      <HeaderIcon x={0} y={0} path="/search" />
      <HeaderIcon x={-30} y={0} path="/order_delivery" />
      <HeaderIcon x={-60} y={0} path="/cart" />
    </StyledHeaderIconGroup>
  );
}

export default HeaderIconGroup;
