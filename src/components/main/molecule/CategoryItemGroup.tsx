import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../atom/CategoryItem';

const StyledCategoryItemGroup = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const items = [
  { content: '홈', path: '/' },
  { content: '기획전', path: '/promotion' },
];

interface Items {
  content: string;
  path: string;
}
function CategoryItemGroup() {
  return (
    <StyledCategoryItemGroup>
      {items.map((e: Items) => {
        return <CategoryItem content={e.content} path={e.path} />;
      })}
    </StyledCategoryItemGroup>
  );
}

export default CategoryItemGroup;
