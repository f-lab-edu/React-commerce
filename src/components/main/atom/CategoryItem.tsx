import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  content: string;
  path: string;
}
function CategoryItem({ content, path }: Props) {
  return (
    <S.CategoryLi>
      <S.CategoryItemNavLink className={({ isActive }) => (isActive ? 'active' : '')} to={path}>
        <span>{content}</span>
      </S.CategoryItemNavLink>
    </S.CategoryLi>
  );
}

export default CategoryItem;

const S = {
  CategoryLi: styled.li`
    display: inline-block;
    list-style: none;
  `,
  CategoryItemNavLink: styled(NavLink)`
    display: inline-block;
    padding: 31px 12px 29px;
    box-sizing: border-box;
    background-color: inherit;
    border: none;
    color: #333;
    height: 100%;
    text-decoration: none;
    &.active {
      font-weight: bold;
      border-bottom: 3px solid black;
    }
    &:hover {
      border-bottom: 3px solid black;
      font-weight: bold;
    }
  `,
};
