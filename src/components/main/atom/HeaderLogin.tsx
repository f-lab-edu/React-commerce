import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HeaderLogin() {
  // 로그인 상태면 유저프로필과 이름+ 클릭시 모달/ 아니면 로그인링크
  return <S.Link to="/">로그인</S.Link>;
}

export default HeaderLogin;

const S = {
  Link: styled(Link)`
    padding-left: 15px;
    display: inline-block;
    text-decoration: none;
    color: black;
    font-size: 13px;
  `,
};
