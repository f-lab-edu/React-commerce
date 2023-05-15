import React, { useState } from 'react';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';
import InfoModal from './InfoModal';

const Price = ({ talkDeal, content }: { talkDeal: Boolean; content: string }) => {
  const [modal, setModal] = useState(false);
  return (
    <S.Wrap>
      <InfoModal
        modal={modal}
        content={
          talkDeal
            ? '우측에서 수량 및 옵션 확인 후 톡딜가로 바로 구매해보세요.'
            : '이 가격은 상품을 등록한 판매자가 직접 산정한 기준입니다'
        }
      />
      <S.Price talkDeal={talkDeal} onMouseOver={() => setModal(true)} onMouseOut={() => setModal(false)}>
        {content}
      </S.Price>
    </S.Wrap>
  );
};

export default Price;

const S = {
  Wrap: styled.span`
    position: relative;
  `,
  Price: styled.span<{ talkDeal: Boolean }>`
    border-radius: 23px;
    display: inline-block;
    margin-right: 10px;
    font-weight: 600;
    background-color: ${(props) => (props.talkDeal ? ColorSet.backgroundYellow : ColorSet.backgroundBlack)};
    color: ${(props) => (props.talkDeal ? ColorSet.textBlack : 'white')};
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
  `,
};
