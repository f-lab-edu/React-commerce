import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';

const PaySuccess = () => {
  return (
    <S.Background>
      <S.Wrap>
        <S.Announce>🎉 결제가 완료되었습니다.</S.Announce>
        <S.HomeBtn to="/">홈으로</S.HomeBtn>
      </S.Wrap>
    </S.Background>
  );
};
export default PaySuccess;

const S = {
  Background: styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${ColorSet.backgroundGray};
    color: ${ColorSet.textBlack};
    padding: 30px 0;
  `,
  Wrap: styled.div`
    background-color: white;
    margin: auto auto;
    padding: 80px;
    width: 870px;
    border-radius: 10px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Announce: styled.div`
    font-size: 40px;
    font-weight: 500;
  `,
  HomeBtn: styled(Link)`
    border: none;
    font-size: 18px;
    text-decoration: none;
    border-radius: 10px;
    margin-top: 30px;
    width: 80px;
    line-height: 40px;
    color: white;
    text-align: center;
    background-color: ${ColorSet.backgroundYellow};
  `,
};
