import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';

const Delivery = () => {
  const navigator = useNavigate();
  return (
    <S.Background>
      <S.Content>현재 발송중인 상품이 없습니다.</S.Content>
      <S.HomeBtn type="button" onClick={() => navigator('/')}>
        홈으로
      </S.HomeBtn>
    </S.Background>
  );
};

export default Delivery;
const S = {
  Background: styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${ColorSet.backgroundGray};
    color: ${ColorSet.textBlack};
    text-align: center;
  `,
  Content: styled.h2`
    font-weight: 500;
    font-size: 25px;
    padding-top: 200px;
  `,
  HomeBtn: styled.button`
    border: none;
    background-color: ${ColorSet.backgroundBlack};
    font-size: 18px;
    margin-top: 20px;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    color: white;
  `,
};
