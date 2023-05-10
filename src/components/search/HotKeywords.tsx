import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import IHotKeywords from '@interfaces/HotKeywords';
import { ColorSet } from 'src/utils/constant';
import { Link } from 'react-router-dom';

const HotKeywords = () => {
  const [keywords, setKeywords] = useState<IHotKeywords>();
  useEffect(() => {
    axios('/search/hotkeywords').then((response: AxiosResponse<IHotKeywords>) => {
      setKeywords(response.data);
    });
  }, []);
  return (
    <S.Wrap>
      <S.Title>쇼핑하기 인기키워드</S.Title>
      {keywords?.hotShoppingKeywords.map((keyword) => {
        return (
          <S.HotKeyword key={keyword.shoppingKeywordId}>
            <S.Link to={keyword.landingUrl}>
              <S.HotEm>HOT </S.HotEm>
              {keyword.keywordName}
            </S.Link>
          </S.HotKeyword>
        );
      })}
      {keywords?.commonShoppingKeywords.map((keyword) => {
        return (
          <S.CommonKeyword key={keyword.shoppingKeywordId}>
            <S.Link to={keyword.landingUrl}># {keyword.keywordName}</S.Link>
          </S.CommonKeyword>
        );
      })}
    </S.Wrap>
  );
};

export default HotKeywords;

const S = {
  Wrap: styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 10px;
    padding: 30px 0;
    border-bottom: 1px solid ${ColorSet.borderGray};
  `,
  Title: styled.h3`
    color: ${ColorSet.textBlack};
    font-weight: 600;
    height: 30px;
  `,
  HotEm: styled.em`
    font-size: 11px;
  `,
  HotKeyword: styled.li`
    list-style: none;
    display: inline-block;
    box-sizing: border-box;
    padding: 7.5px;
    margin: 2.5px;
    border-radius: 20px;
    color: ${ColorSet.textOrange};
    font-size: 13px;
    border: 1px solid ${ColorSet.borderOrange};
  `,
  CommonKeyword: styled.li`
    list-style: none;
    display: inline-block;
    box-sizing: border-box;
    padding: 7.5px;
    margin: 2.5px;
    border-radius: 20px;
    color: ${ColorSet.textBlue};
    font-size: 13px;
    border: 1px solid ${ColorSet.borderBlue};
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: inherit;
  `,
};
