import React from 'react';
import useFetch from 'src/hooks/useFetch';
import styled from 'styled-components';
import { categoryData } from '@interfaces/categoryGroups';
import SubCategoryInnerItem from './SubCategoryInnerItem';

function SubCategoryModal({ setModal }: { setModal: React.Dispatch<React.SetStateAction<Boolean>> }) {
  const categoryList = useFetch<categoryData>('/categoryList')?.data;

  const subcateogries = categoryList?.map((e) => <SubCategoryInnerItem key={e.groupId} {...e} setModal={setModal} />);
  return <S.SubCategoryModal>{subcateogries}</S.SubCategoryModal>;
}

export default SubCategoryModal;

const S = {
  SubCategoryModal: styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    background-color: #fff;
    top: 70px;
    width: 889px;
    height: 740px;
    padding: 20px 10px 30px;
    border: 1px solid #ddd;
    white-space: nowrap;
    box-sizing: border-box;
    overflowy: scroll;
  `,
};
