import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import { categoryGroup, categoryData } from '@interfaces/categoryGroups';
import SubCategoryInnerItem from './SubCategoryInnerItem';

function SubCategoryModal() {
  const [categoryList, setCategoryList] = useState<categoryGroup[]>();
  useEffect(() => {
    axios.get('/categoryList').then((response: AxiosResponse<categoryData>) => {
      setCategoryList(response.data.data);
    });
  }, []);

  const subcateogries = categoryList?.map((e) => <SubCategoryInnerItem key={e.groupId} {...e} />);
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
