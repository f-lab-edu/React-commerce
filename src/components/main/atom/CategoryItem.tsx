import React from 'react';
import styled from 'styled-components';

const CategoryLi = styled.li`
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    border-bottom: 1px solid black;
    font-weight: bold;
  }
`;

function CategoryItem({ content, path }: { content: string; path: string }) {
  return (
    <CategoryLi>
      <span>{content}</span>
    </CategoryLi>
  );
}

export default CategoryItem;
