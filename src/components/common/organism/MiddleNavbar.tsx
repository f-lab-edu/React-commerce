import React from 'react';
import styled from 'styled-components';
import fetchData from 'src/utils/fetchData';

interface IMiddleNavbar {
  title: string;
  path: string;
  categoryId: number;
}
const promiseItems = fetchData<IMiddleNavbar[]>('/middleCategory');
export const MiddleNavbar = ({ category, setCategory }: { category: string; setCategory: React.Dispatch<React.SetStateAction<string>> }) => {
  const Items = promiseItems.read();
  const ItemList = Items?.map((item: IMiddleNavbar) => {
    return (
      <S.LinkWrap key={item.categoryId}>
        <S.Navlink onClick={() => setCategory(item.title)} active={item.title === category}>
          {item.title}
        </S.Navlink>
      </S.LinkWrap>
    );
  });
  return <S.MiddelNavbarWrap>{ItemList}</S.MiddelNavbarWrap>;
};

export default MiddleNavbar;

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
    cursor: pointer;
  `,
  Navlink: styled.span<{ active: boolean }>`
    display: inline-block;
    padding: 15px 5px;
    text-align: center;
    width: 100%;

    &:hover {
      color: ${(props) => (props.active ? 'white' : '#437edd')};
    }
    background-color: ${(props) => props.active && '#437edd'};
    color: ${(props) => (props.active ? 'white' : 'black')};
  `,
};
