import React from 'react';
import styled from 'styled-components';

interface Props {
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar = ({ changeHandler }: Props) => {
  return (
    <S.SearchBar>
      <S.Icon />
      <S.Input
        placeholder="검색어를 입력하세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e.target.value)}
      />
    </S.SearchBar>
  );
};

export default SearchBar;

const S = {
  SearchBar: styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 4px #e5e5e5;
  `,
  Input: styled.input`
    flex: 1;
    font-size: 16px;
    background-color: orange;
    height: 30px;
    padding: 20px;
    outline: none;
  `,
  Icon: styled.span`
    background: url('https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230430/232103/ico_store.d655246324218a01.png')
      0 0 no-repeat;
    background-size: 610px 780px;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-position: -410px -210px;
  `,
};
