import React, { useState } from 'react';
import styled from 'styled-components';

const ScrollHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  });
};
const ScrollUpModal = () => {
  return (
    <S.ScrollUpModal onClick={ScrollHandler}>
      <S.Icon />
    </S.ScrollUpModal>
  );
};

export default ScrollUpModal;

const S = {
  ScrollUpModal: styled.button`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d0d0d0;
    box-shadow: 0 2px rgba(0, 0, 0, 0.08);
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 9999;
    padding: 0;
  `,
  Icon: styled.span`
    background: url('https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230430/232103/ico_store.d655246324218a01.png')
      no-repeat 0 0;
    background-position: -90px -480px;
    background-size: 610px 780px;
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
  `,
};
