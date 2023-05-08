import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';

interface IMiddleNavbar {
  title: string;
  path: string;
  categoryId: number;
}

export const MiddleNavbar = () => {
  const [Items, setItems] = useState<IMiddleNavbar[]>();
  useEffect(() => {
    axios.get('/middleCategory').then((response: AxiosResponse<IMiddleNavbar[]>) => {
      setItems(response.data);
    });
  }, []);

  const ItemList = Items?.map((item: IMiddleNavbar) => {
    return (
      <S.LinkWrap key={item.categoryId}>
        <S.Navlink to={item.path}>{item.title}</S.Navlink>
      </S.LinkWrap>
    );
  });
  return <S.MiddelNavbarWrap>{ItemList}</S.MiddelNavbarWrap>;
};

export const MemoizedMiddleNavbar = React.memo(MiddleNavbar);

const S = {
  MiddelNavbarWrap: styled.ul`
    display: flex;
    font-size: 16px;
    border: 1px solid #e7e8eb;
    margin-bottom: 40px;
  `,
  LinkWrap: styled.li`
    flex-basis: 0;
    flex-grow: 1;
  `,
  Navlink: styled(NavLink)`
    text-decoration: none;
    display: inline-block;
    padding: 15px 5px;
    text-align: center;
    width: 100%;
    color: black;

    &:hover {
      color: #437edd;
    }
    &.active {
      background-color: #437edd;
      color: white;
    }
  `,
};
