import React, { useState, useEffect, forwardRef, ForwardedRef } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import mainBanner from '@interfaces/mainBanner';
import CarouselScreen from '../atom/CarouselScreen';

const CarouselContainer = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [bannerData, setBannerData] = useState<mainBanner[]>();
  useEffect(() => {
    axios
      .get('http://localhost:3000/mainBanners')
      .then((response: AxiosResponse<mainBanner[]>) => setBannerData(response.data));
  }, []);

  return (
    <StyledCarouselContainer ref={ref}>
      {bannerData?.map((e: mainBanner) => {
        return <CarouselScreen key={e.id} bannerUrl={e.firstImageUrl} name={e.name} />;
      })}
    </StyledCarouselContainer>
  );
});

const StyledCarouselContainer = styled.div`
  display: flex;
  transition: 0.3s;
`;

export default CarouselContainer;
