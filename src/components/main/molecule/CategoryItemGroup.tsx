import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../atom/CategoryItem';

const StyledCategoryItemGroup = styled.ul`
  display: inline-block;
  height: 100%;
  margin: 0;
  &:after {
    content: '';
    width: 1px;
    height: 30px;
    border-right: 1px solid rgba(34, 34, 34, 0.1);
  }
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
