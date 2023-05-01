import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderIcon = styled.span<StyledHeaderIconInterface>`
  background: url(https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230430/232103/ico_store_pc.82c1fd4bf8ec030b.svg)
    no-repeat;
  display: inline-block;
  bacgkround-size: 800px 500px;
  width: 28px;
  height: 28px;
  ${(props): string => {
    return `background-position: ${props.x}px ${props.y}px;`;
  }}
`;
const StyledIconLink = styled(Link)`
  padding: 12px;
  display: inline-block;
`;
interface HeaderIconInterface {
  x: number;
  y: number;
  path: string;
}
type StyledHeaderIconInterface = Pick<HeaderIconInterface, 'x' | 'y'>;

function HeaderIcon({ x, y, path }: { x: number; y: number; path: string }) {
  return (
    <StyledIconLink to={path}>
      <StyledHeaderIcon x={x} y={y} />
    </StyledIconLink>
  );
}

export default HeaderIcon;
