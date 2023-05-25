import React, { useState } from 'react';
import styled from 'styled-components';
import { RECENT_KEYWORD, ColorSet } from 'src/utils/constant';
import { clearLocalStorage, getLocalStorage, type IRecentKeyword } from 'src/utils/localStorage';
import RecentSearchedItem from './RecentSearchedItem';

const RecentSearchedBox = () => {
  const [recentSearchedKeyword, setRecentSearchedKeyword] = useState(() => getLocalStorage<IRecentKeyword[]>(RECENT_KEYWORD));

  return (
    <S.RecentSearched>
      <S.Title>최근 검색</S.Title>
      <S.Remover
        onClick={() => {
          clearLocalStorage(RECENT_KEYWORD);
          setRecentSearchedKeyword([]);
        }}
      >
        전체 삭제
      </S.Remover>
      <S.ListBox>
        {recentSearchedKeyword ? (
          recentSearchedKeyword.map((keyword) => {
            return <RecentSearchedItem content={keyword.name} path={keyword.path} />;
          })
        ) : (
          <S.Notice>최근 검색 내역이 없습니다.</S.Notice>
        )}
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
  Notice: styled.p`
    font-size: 14px;
    color: ${ColorSet.textGray};
  `,
};
