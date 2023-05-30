import React, { useState } from 'react';
import styled from 'styled-components';
import SubCategoryModal from './SubCategoryModal';

function SubCategorySet() {
  const [modal, setModal] = useState<Boolean>(false);

  return (
    <>
      <S.SubCategorySet
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setModal(!modal);
        }}
      >
        <S.Icon>☰</S.Icon> 카테고리
      </S.SubCategorySet>
      {modal && <SubCategoryModal />}
    </>
  );
}

export default SubCategorySet;

const S = {
  SubCategorySet: styled.button`
    font-weight: 700;
    font-size: 16px;
    position: relative;
    padding-left: 15px;
    color: #4684e9;
    border: none;
    background-color: inherit;
  `,
  Icon: styled.span`
    display: inline-block;
    margin-top: -10px;
  `,
};
