import React from 'react';
import styled from 'styled-components';
import CurCartItemCountIcon from '@components/cart/CurCartItemCountIcon';
import HeaderIcon from '../atom/HeaderIcon';

function HeaderIconGroup() {
  return (
    <S.HeaderIconGroup>
      <HeaderIcon x={0} y={0} path="/search" />
      <HeaderIcon x={-30} y={0} path="/order_delivery" />
      <S.CartIconWrap>
        <HeaderIcon x={-60} y={0} path="/cart" />
        <CurCartItemCountIcon />
      </S.CartIconWrap>
    </S.HeaderIconGroup>
  );
}

export default HeaderIconGroup;

const S = {
  HeaderIconGroup: styled.div`
    margin-left: auto;
    &:after {
      content: '';
      width: 1px;
      height: 28px;
      display: inline-block;
      border-right: 1px solid #ddd;
    }
  `,
  CartIconWrap: styled.span`
    position: relative;
  `,
};
