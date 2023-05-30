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
import Spinner from '@components/common/atom/Spinner';
import ErrorFallback from '@components/common/organism/ErrorFallback';

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
          fallback={<ErrorFallback title="상품 검색 요청에 실패하였습니다." />}
        >
          <Suspense fallback={<Spinner />}>
            <SuggestedKeywordBox fetcher={suggestedKeywordFetch} />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <>
          <RecentSearchedBox />
          <ErrorBoundary onReset={() => setHotKeywordFetch(fetchData<IHotKeywords>('search/hotkeywords'))} fallback={<ErrorFallback title="핫 키워드 요청에 실패하였습니다." />}>
            <Suspense fallback={<Spinner />}>
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
