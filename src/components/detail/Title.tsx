import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  content: string | undefined;
}
const Title = ({ name, content }: Props) => {
  return (
    <S.Title>
      {name} <br />
      {content && `원산지: ${content}`}
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
