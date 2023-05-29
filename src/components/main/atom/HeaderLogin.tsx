import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/reducers/login';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from 'src/reducers';
import { ColorSet } from 'src/utils/constant';

function HeaderLogin() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.user);
  const [toggle, setToggle] = useState(false);

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
    <S.Wrap onClick={() => setToggle((prev) => !prev)}>
      <S.ProfileImg src={data.user?.thumbnail_image} width={30} height={30} />
      <span>{data.user?.nickname}</span>
      {toggle && <S.Logout onClick={() => dispatch({ type: 'LOGOUT' })}>로그아웃</S.Logout>}
    </S.Wrap>
  );
}

export default HeaderLogin;

const S = {
  Wrap: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    &:after {
      content: '>';
      margin-left: 5px;
      display: inline-block;
      transform: rotate(90deg);
    }
  `,
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
  Logout: styled.div`
    position: absolute;
    cursor: pointer;
    border: 1px solid ${ColorSet.borderGray};
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    top: 40px;
    right: 0;
    text-align: center;
    width: 80px;
    color: ${ColorSet.textGray};
    &:hover {
      font-weight: 600;
      color: ${ColorSet.textBlack};
    }
  `,
};
