import React from 'react';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const Category = () => {
  return <S.Content>추가 예정입니다</S.Content>;
};

export default Category;

const S = {
  Content: styled.div`
    font-size: 30px;
    color: ${ColorSet.textBlue};
    text-align: center;
    padding-top: 300px;
  `,
};
