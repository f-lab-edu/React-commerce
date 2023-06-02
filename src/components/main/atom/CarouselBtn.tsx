import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  direction: string;
  click: Function;
};
type StyledProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  direction: string;
};

function CarouselBtn({ direction, click }: Props) {
  return (
    <S.CarouselBtn
      direction={direction}
      onClick={() => {
        click();
      }}
    >
      {direction === 'left' ? '<' : '>'}
    </S.CarouselBtn>
  );
}

const memorizedCarouselBtn = memo(CarouselBtn);

export default memorizedCarouselBtn;

const S = {
  CarouselBtn: styled.button<StyledProps>`
    cursor: pointer;
    position: absolute;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.23);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);
    ${(props) => (props.direction === 'right' ? `right:50px;` : `left:50px;`)}
  `,
};
