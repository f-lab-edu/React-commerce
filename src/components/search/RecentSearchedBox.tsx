import React, { useState } from 'react';
import styled from 'styled-components';
import { RECENT_KEYWORD, ColorSet } from 'src/utils/constant';
import { clearLocalStorage, getLocalStorage } from 'src/utils/localStorage';
import RecentSearchedItem from './RecentSearchedItem';

const RecentSearchedBox = () => {
  const [recentSearchedKeyword, setRecentSearchedKeyword] = useState(getLocalStorage(RECENT_KEYWORD));

  return (
    <S.RecentSearched>
      <S.Title>최근 검색</S.Title>
      <S.Remover onClick={() => setRecentSearchedKeyword(clearLocalStorage(RECENT_KEYWORD))}>전체 삭제</S.Remover>
      <S.ListBox>
        {recentSearchedKeyword?.map((keyword) => {
          return <RecentSearchedItem content={keyword.name} path={keyword.path} />;
        })}
      </S.ListBox>
    </S.RecentSearched>
  );
};

export default RecentSearchedBox;

const S = {
  RecentSearched: styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    height: 120px;
  `,
  Title: styled.h3`
    color: ${ColorSet.textBlack};
    font-weight: 600;
    height: 30px;
  `,
  Remover: styled.button`
    position: absolute;
    border: none;
    background-color: inherit;
    top: 5px;
    right: 0;
    color: ${ColorSet.textGray};
  `,
  ListBox: styled.ul`
    display: flex;
  `,
};
