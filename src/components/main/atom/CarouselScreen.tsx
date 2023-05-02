import React from 'react';
import styled from 'styled-components';

const StyledCarouselScreen = styled.div`
  height: 100%;

  position: relative;
`;
const SubCopy = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  @media (min-width: 780px) {
    font-size: 20px;
  }
  @media (max-width: 779px) {
    font-size: 16px;
  }
`;
const MainCopy = styled.span<{ color: string }>`
  display: block;
  padding-top: 14px;
  line-height: 41px;
  color: ${(props) => props.color};
  @media (min-width: 780px) {
    font-size: 32px;
  }
  @media (max-width: 779px) {
    font-size: 25px;
  }
`;
const Copy = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  top: 25%;
  left: 15%;
  white-space: pre-wrap;
`;

interface carouselScreenInterface {
  bannerUrl: string;
  name: string;
  mainCopyColor: string;
  mainCopy: string;
  subCopyColor: string;
  subCopy: string;
}

function CarouselSlide({ bannerUrl, name, mainCopy, mainCopyColor, subCopy, subCopyColor }: carouselScreenInterface) {
  return (
    <StyledCarouselScreen>
      <Copy>
        <SubCopy color={subCopyColor}>{subCopy}</SubCopy>
        <MainCopy color={mainCopyColor}>{mainCopy}</MainCopy>
      </Copy>
      <img src={bannerUrl} alt={name} width={window.innerWidth} height={300} />
    </StyledCarouselScreen>
  );
}

export default CarouselSlide;
