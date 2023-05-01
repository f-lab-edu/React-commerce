import React, { useState } from 'react';
import styled from 'styled-components';
import SubCategoryModal from './SubCategoryModal';

const StyledSubCategorySet = styled.button`
  font-weight: 700;
  font-size: 16px;
  position: relative;
  padding-left: 15px;
  color: #4684e9;
  border: none;
  background-color: inherit;
`;
function SubCategorySet() {
  const [modal, setModal] = useState<Boolean>(false);

  return (
    <>
      <StyledSubCategorySet
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setModal(!modal);
        }}
      >
        ☰ 카테고리
      </StyledSubCategorySet>
      {modal && <SubCategoryModal />}
    </>
  );
}

export default SubCategorySet;
