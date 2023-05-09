import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import ISearchKeyword from '@interfaces/SearchKeywords';
import SearchBar from '@components/search/SearchBar';
import SuggestedKeywordBox from '@components/search/SuggestedKeywordBox';
import RecentSearchedBox from '@components/search/RecentSearchedBox';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [keywords, setKeywords] = useState<ISearchKeyword[]>([]);
  const fetchData = async () => {
    const response = await axios.get(`/search/?q=${searchValue}`);
    setKeywords(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [searchValue]);
  return (
    <S.Layout>
      <SearchBar changeHandler={setSearchValue} />
      {searchValue ? <SuggestedKeywordBox keywords={keywords} /> : <RecentSearchedBox />}
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
    max-width: 750px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
};
export default Search;
