import React from 'react';
import { ColorSet } from 'src/utils/constant';
import styled, { keyframes } from 'styled-components';

interface Props {
  width: string;
  height: string;
}
const Spinner = ({ width, height }: Props) => {
  return <SpinnerIcon width={width} height={height} />;
};

export default Spinner;

const spinnerAnimation = keyframes`
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg);}
`;

const SpinnerIcon = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  border: 8px solid ${ColorSet.backgroundGray};
  border-top-color: ${ColorSet.backgroundYellow};
  animation: ${spinnerAnimation} 1s ease infinite;
`;
