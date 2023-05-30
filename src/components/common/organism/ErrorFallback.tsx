import React from 'react';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const ErrorFallback = ({ title }: { title: string }) => {
  return (
    <S.Wrap>
      <h2>{title}</h2>
      <S.ErrorBtn
        onClick={() => {
          window.location.reload();
        }}
      >
        다시 시도하기
      </S.ErrorBtn>
    </S.Wrap>
  );
};

export default ErrorFallback;
const S = {
  Wrap: styled.div`
    font-size: 20px;
    display: flex;
    font-weight: 600;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ErrorBtn: styled.div`
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px;
    background-color: ${ColorSet.backgroundBlack};
  `,
};
