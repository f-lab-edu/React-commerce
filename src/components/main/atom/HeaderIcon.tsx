import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  x: number;
  y: number;
  path: string;
}
type IStyledHeaderIcon = Pick<Props, 'x' | 'y'>;

function HeaderIcon({ x, y, path }: Props) {
  return (
    <S.IconLink to={path}>
      <S.HeaderIcon x={x} y={y} />
    </S.IconLink>
  );
}

export default HeaderIcon;

const S = {
  HeaderIcon: styled.span<IStyledHeaderIcon>`
    background: url(https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230430/232103/ico_store_pc.82c1fd4bf8ec030b.svg) no-repeat;
    display: inline-block;
    bacgkround-size: 800px 500px;
    width: 28px;
    height: 28px;
    ${(props): string => {
      return `background-position: ${props.x}px ${props.y}px;`;
    }}
  `,
  IconLink: styled(Link)`
    padding: 12px;
    display: inline-block;
  `,
};
