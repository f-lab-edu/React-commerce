import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../atom/CategoryItem';

const paths = [{ content: '홈', path: '/', id: 1 }];

interface Items {
  content: string;
  path: string;
  id: number;
}

function CategoryItemGroup() {
  return (
    <S.CategoryItemGroup>
      {paths.map((path: Items) => {
        return <CategoryItem key={path.id} content={path.content} path={path.path} />;
      })}
    </S.CategoryItemGroup>
  );
}

export default CategoryItemGroup;

const S = {
  CategoryItemGroup: styled.ul`
    display: inline-block;
    height: 100%;
    margin: 0;
    &:after {
      content: '';
      width: 1px;
      height: 30px;
      border-right: 1px solid rgba(34, 34, 34, 0.1);
    }
  `,
};
