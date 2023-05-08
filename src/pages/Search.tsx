import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '@components/search/SearchBar';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <S.Layout>
      <SearchBar changeHandler={setSearchValue} />
      {searchValue ? <div>입력중</div> : <div>다른거</div>}
    </S.Layout>
  );
};

const S = {
  Layout: styled.div`
    max-width: 750px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: yellow;
    margin: 0 auto;
  `,
};
export default Search;
