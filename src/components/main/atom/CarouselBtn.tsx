import React from 'react';
import styled from 'styled-components';

const StyledCarouselBtn = styled.button<StyledProps>`
  position: absolute;
  ${(props) => (props.direction === 'right' ? `right: 20px;` : `left:20px;`)}
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.23);
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);
`;
interface Props {
  direction: string;
  click: Function;
}

interface StyledProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  direction: string;
}
function CarouselBtn({ direction, click }: Props) {
  return (
    <StyledCarouselBtn
      direction={direction}
      onClick={() => {
        click();
      }}
    >
      <span>{direction === 'left' ? '<' : '>'}</span>
    </StyledCarouselBtn>
  );
}

export default CarouselBtn;
