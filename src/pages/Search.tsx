import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import fetchData from 'src/utils/fetchData';
import ISearchKeyword from '@interfaces/SearchKeywords';
import SearchBar from '@components/search/SearchBar';
import SuggestedKeywordBox from '@components/search/SuggestedKeywordBox';
import RecentSearchedBox from '@components/search/RecentSearchedBox';
import useDebounce from 'src/hooks/useDebounce';
import HotKeywords from '@components/search/HotKeywords';
import IHotKeywords from '@interfaces/hotkeywordsType';
import { ErrorBoundary } from 'react-error-boundary';
import FetchErrorFallback from '@components/FetchErrorFallback';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debounceValue, setDebounceValue] = useState<string>('');
  const [suggestedKeywordFetch, setSuggestedKeywordFetch] = useState(() => fetchData<ISearchKeyword[]>(`search/${searchValue}`));
  const [hotKeywordFetch, setHotKeywordFetch] = useState(() => fetchData<IHotKeywords>('search/hotkeywords'));

  useDebounce(() => setDebounceValue(searchValue), 300);

  useEffect(() => {
    setSuggestedKeywordFetch(fetchData<ISearchKeyword[]>(`search/?q=${debounceValue}`));
  }, [debounceValue]);

  return (
    <S.Layout>
      <SearchBar changeHandler={setSearchValue} />
      {searchValue ? (
        <ErrorBoundary
          onError={() => {
            setSuggestedKeywordFetch(fetchData<ISearchKeyword[]>(`search/?q=${debounceValue}`));
          }}
          fallbackRender={FetchErrorFallback}
        >
          <Suspense fallback={<h2>로딩중</h2>}>
            <SuggestedKeywordBox fetcher={suggestedKeywordFetch} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <>
          <RecentSearchedBox />

          <ErrorBoundary onReset={() => setHotKeywordFetch(fetchData<IHotKeywords>('search/hotkeywords'))} fallbackRender={FetchErrorFallback}>
            <Suspense fallback={<h2>로딩중</h2>}>
              <HotKeywords fetcher={hotKeywordFetch} />
            </Suspense>
          </ErrorBoundary>
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
