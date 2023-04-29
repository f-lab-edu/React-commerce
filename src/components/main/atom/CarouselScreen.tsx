import React from 'react';
import styled from 'styled-components';

const StyledCarouselScreen = styled.div`
  height: 100%;
`;
function CarouselSlide({ bannerUrl, name }: { bannerUrl: string; name: string }) {
  return (
    <StyledCarouselScreen>
      <img src={bannerUrl} alt={name} width={window.innerWidth} height={300} />
    </StyledCarouselScreen>
  );
}

export default CarouselSlide;
