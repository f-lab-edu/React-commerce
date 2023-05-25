import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/reducers/login';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from 'src/reducers';

function HeaderLogin() {
  // 로그인 상태면 유저프로필과 이름+ 클릭시 모달/ 아니면 로그인링크
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.user);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      dispatch(login(code));
    }
  }, []);

  if (!data.isAuthenticated)
    return <S.Link to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}>로그인</S.Link>;
  return (
    <>
      <S.ProfileImg src={data.user?.thumbnail_image} width={30} height={30} />
      <span>{data.user?.nickname}</span>
    </>
  );
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
  ProfileImg: styled.img`
    margin: 0 15px;
    border-radius: 10px;
  `,
};
