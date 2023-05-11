import React, { useContext } from 'react';
import ProductDetailContext from 'src/context/ProductDetailContext';
import styled from 'styled-components';

const Title = () => {
  const data = useContext(ProductDetailContext);
  if (data == null) return null;
  return (
    <S.Title>
      {data.name} <br />
      {data.originArea && `원산지: ${data.originArea.content}`}
    </S.Title>
  );
};

export default Title;

const S = {
  Title: styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 10px;
  `,
};
