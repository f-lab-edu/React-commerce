import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ColorSet } from 'src/utils/constant';

interface Props {
  content: string;
  path: string;
}
const RecentSearchedItem = ({ content, path }: Props) => {
  return (
    <S.Wrap>
      <S.Link to={path}>{content}</S.Link>
    </S.Wrap>
  );
};

export default RecentSearchedItem;

const S = {
  Wrap: styled.li`
    list-style: none;
    width: 80px;
    height: 30px;
    padding: 5px;
    margin: 4px;
    line-height: 30px;
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  Link: styled(Link)`
    text-decoration: none;
    font-size: 14px;
    color: ${ColorSet.textBlack};
  `,
  RemoveBtn: styled.button`
    background-color: inheirt;
  `,
};
