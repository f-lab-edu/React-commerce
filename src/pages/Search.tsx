import React, { useState } from 'react';
import styled from 'styled-components';
import ISearchKeyword from '@interfaces/SearchKeywords';
import SearchBar from '@components/search/SearchBar';
import SuggestedKeywordBox from '@components/search/SuggestedKeywordBox';
import RecentSearchedBox from '@components/search/RecentSearchedBox';
import useDebounce from 'src/hooks/useDebounce';
import useFetch from 'src/hooks/useFetch';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debounceValue, setDebounceValue] = useState<string>('');

  useDebounce(() => setDebounceValue(searchValue), 300);
  const keywords = useFetch<ISearchKeyword[]>(`/search/?q=${debounceValue}`, 'GET');

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
