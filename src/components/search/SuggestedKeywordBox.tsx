import React from 'react';
import styled from 'styled-components';
import ISearchKeyword from '@interfaces/SearchKeywords';
import { Link } from 'react-router-dom';
import { setLocalStorage } from 'src/utils/localStorage';
import { RECENT_KEYWORD } from 'src/utils/constant';

/* eslint-disable */
const SuggestedKeywordBox = ({ keywords }: { keywords: ISearchKeyword[] | undefined }) => {
  return (
    <ul>
      {keywords?.map((keywordData: ISearchKeyword, index) => {
        return (
          <S.SuggestedKeyword key={index}>
            <S.Link
              to={''}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setLocalStorage(e, RECENT_KEYWORD)}
            >
              {keywordData.keyword}
            </S.Link>
          </S.SuggestedKeyword>
        );
      })}
    </ul>
  );
};

export default SuggestedKeywordBox;

const S = {
  SuggestedKeywordBox: styled.ul``,
  SuggestedKeyword: styled.li`
    height: 40px;
    font-size: 16px;
    line-height: 40px;
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: black;
  `,
};
