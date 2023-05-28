import React from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';

interface IInfoModal {
  modal: Boolean;
  content: string;
}
const InfoModal = ({ modal, content }: IInfoModal) => {
  return <S.Hidden modal={modal}>{content}</S.Hidden>;
};

export default InfoModal;

const S = {
  Hidden: styled.p<{ modal: Boolean }>`
    display: ${(props) => (props.modal ? 'inline-block' : 'none')};
    position: absolute;
    z-index: 999;
    top: -80px;
    left: -50px;
    width: 200px;
    border-radius: 5px;
    padding: 10px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.04em;
    background-color: white;
    color: ${ColorSet.textGray};
    border: 1px solid ${ColorSet.borderGray};
    &:after {
      content: '>';
      position: absolute;
      font-weight: bold;
      bottom: -13px;
      transform: rotate(90deg);
    }
  `,
};
