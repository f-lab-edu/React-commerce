import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoryGroup, category } from '@interfaces/categoryGroups';

function SubCategoryInnerItem({ name, categories, groupId }: categoryGroup) {
  return (
    <S.SubCategoryInnerItem>
      <S.SubCategoryInnerItemHeader to={`/category/${groupId}`}>
        {name}
        <S.GoIcon />
      </S.SubCategoryInnerItemHeader>
      <ul>
        {categories.map((categoryData: category) => {
          return (
            <li key={categoryData.categoryId}>
              <S.SubcategoryinnterItemContent to={`/category/${groupId}/${categoryData.categoryId}`}>
                {categoryData.name}
              </S.SubcategoryinnterItemContent>
            </li>
          );
        })}
      </ul>
    </S.SubCategoryInnerItem>
  );
}

export default SubCategoryInnerItem;

const S = {
  SubCategoryInnerItem: styled.div`
    width: 145px;
    padding: 0 10px;
    position: relative;
    &:not(:nth-child(5)) {
      border-right: 1px solid rgba(34, 34, 34, 0.1);
    }
    &:last-child {
      border-right: 1px solid rgba(34, 34, 34, 0.1);
    }
  `,
  SubCategoryInnerItemHeader: styled(Link)`
    text-decoration: none;
    color: black;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 10px;
  `,

  SubcategoryinnterItemContent: styled(Link)`
    text-decoration: none;
    color: rgba(34, 34, 34, 0.5);
    font-size: 13px;
    line-height: 26px;
  `,
  GoIcon: styled.span`
    background: url(https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230430/232103/ico_store_pc.82c1fd4bf8ec030b.svg)
      no-repeat;
    bacgkround-size: 800px 500px;
    display: inline-block;
    position: absolute;
    right: 10px;
    width: 6px;
    height: 10px;
    background-position: 0 -50px;
  `,
};
