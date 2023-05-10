import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import ISearchKeyword from '@interfaces/SearchKeywords';
import SearchBar from '@components/search/SearchBar';
import SuggestedKeywordBox from '@components/search/SuggestedKeywordBox';
import RecentSearchedBox from '@components/search/RecentSearchedBox';
import useDebounce from 'src/hooks/useDebounce';
import HotKeywords from '@components/search/HotKeywords';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [keywords, setKeywords] = useState<ISearchKeyword[]>([]);
  const [debounceValue, setDebounceValue] = useState<string>('');

  useDebounce(() => setDebounceValue(searchValue), 300, [searchValue]);

  const fetchData = async () => {
    const response = await axios.get(`/search/?q=${debounceValue}`);
    setKeywords(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [debounceValue]);

  return (
    <S.Layout>
      <SearchBar changeHandler={setSearchValue} />
      {searchValue ? (
        <SuggestedKeywordBox keywords={keywords} />
      ) : (
        <>
          <RecentSearchedBox />
          <HotKeywords />
        </>
      )}
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
    max-width: 750px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
};
export default Search;
