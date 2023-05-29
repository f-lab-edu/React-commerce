import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import shareIcon from '@assets/shareIcon.png';
import ProductShareModal from './ProductShareModal';

const StyledProductBoxShare = styled.button`
  cursor: pointer;
  background-color: inherit;
  border: none;
`;
function ProductBoxShare({ className }: { className?: string }) {
  const [modal, setModal] = useState<Boolean>(false);

  const modalHandler = (e: React.MouseEvent<HTMLElement>) => {
    setModal(!modal);
  };
  const { isAuthenticated } = useSelector((state: RootState) => ({ isAuthenticated: state.user.isAuthenticated }));
  if (!isAuthenticated) {
    return (
      <StyledProductBoxShare
        className={className}
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
        }}
        type="button"
      >
        <img src={shareIcon} width={24} height={24} alt="공유하기 아이콘" />
      </StyledProductBoxShare>
    );
  }

  return (
    <StyledProductBoxShare className={className} onClick={modalHandler} type="button">
      <img src={shareIcon} width={24} height={24} alt="공유하기 아이콘" />
      {modal && createPortal(<ProductShareModal close={setModal} />, document.body as HTMLElement)}
    </StyledProductBoxShare>
  );
}

export default ProductBoxShare;
