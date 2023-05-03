import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import shareIcon from '@assets/shareIcon.png';
import ProductShareModal from './ProductShareModal';

const StyledProductBoxShare = styled.button`
  background-color: inherit;
  border: none;
`;
function ProductBoxShare() {
  const [modal, setModal] = useState<Boolean>(false);

  const modalHandler = (e: React.MouseEvent<HTMLElement>) => {
    setModal(!modal);
  };
  return (
    <StyledProductBoxShare onClick={modalHandler} type="button">
      <img src={shareIcon} width={24} height={24} alt="공유하기 아이콘" />
      {modal && createPortal(<ProductShareModal close={setModal} />, document.body as HTMLElement)}

      {/* <Portal>
           <ProductBoxShareModal />
         </Portal> */}
    </StyledProductBoxShare>
  );
}

export default ProductBoxShare;
