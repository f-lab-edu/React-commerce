import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CategoryLi = styled.li`
  display: inline-block;
  list-style: none;
`;
const CategoryItemNavLink = styled(NavLink)`
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
`;
interface categoryItemInterface {
  content: string;
  path: string;
}
function CategoryItem({ content, path }: categoryItemInterface) {
  return (
    <CategoryLi>
      <CategoryItemNavLink className={({ isActive }) => (isActive ? 'active' : '')} to={path}>
        <span>{content}</span>
      </CategoryItemNavLink>
    </CategoryLi>
  );
}

export default CategoryItem;
