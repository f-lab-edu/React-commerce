import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigator = useNavigate();
  return (
    <button
      type="button"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        navigator(path);
      }}
    >
      <CategoryLi>
        <span>{content}</span>
      </CategoryLi>
    </button>
  );
}

export default CategoryItem;
