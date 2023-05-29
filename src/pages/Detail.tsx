import React from 'react';
import DetailLayout from '@components/detail/DetailLayout';
import styled from 'styled-components';

const Detail = () => {
  return (
    <S.Detail>
      <DetailLayout />
    </S.Detail>
  );
};

export default Detail;

const S = {
  Detail: styled.div`
    width: 1280px;
    margin: 0 auto;
  `,
};
