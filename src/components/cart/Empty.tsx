import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const Empty = () => {
  const naivgate = useNavigate();
  return (
    <S.Wrap>
      <S.Icon>🧺</S.Icon>
      <S.Text>장바구니에 담긴 상품이 없습니다.</S.Text>
      <div>
        <S.BeforeBtn onClick={() => naivgate(-1)}>이전 화면</S.BeforeBtn>
        <S.HomeBtn onClick={() => naivgate('/')}>쇼핑하기 홈</S.HomeBtn>
      </div>
    </S.Wrap>
  );
};

export default Empty;

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  `,
  Icon: styled.span`
    font-size: 60px;
  `,
  Text: styled.p`
    font-size: 20px;
    margin: 5px;
  `,
  BeforeBtn: styled.button`
    cursor: pointer;
    border: 1px solid ${ColorSet.borderGray};
    background-color: inherit;
    padding: 10px 20px;
    margin: 10px;
  `,
  HomeBtn: styled.button`
    cursor: pointer;
    border: none;
    background-color: ${ColorSet.backgroundBlack};
    color: white;
    padding: 10px 20px;
  `,
};
