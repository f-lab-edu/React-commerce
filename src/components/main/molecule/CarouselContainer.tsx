import React, { useState, useEffect, forwardRef, ForwardedRef } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import MainBanner from '@interfaces/MainBanner';
import CarouselScreen from '../atom/CarouselScreen';

const CarouselContainer = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [bannerDatas, setBannerDatas] = useState<MainBanner[]>();
  useEffect(() => {
    axios
      .get('http://localhost:3000/mainBanners')
      .then((response: AxiosResponse<MainBanner[]>) => setBannerDatas(response.data));
  }, []);

  return (
    <S.CarouselContainer ref={ref}>
      {bannerDatas?.map((bannerData: MainBanner) => {
        return (
          <CarouselScreen
            key={bannerData.id}
            bannerUrl={bannerData.pcImageUrl}
            name={bannerData.name}
            subCopy={bannerData.subCopy}
            subCopyColor={bannerData.subCopyColor}
            mainCopy={bannerData.mainCopy}
            mainCopyColor={bannerData.mainCopyColor}
          />
        );
      })}
    </S.CarouselContainer>
  );
});
export default CarouselContainer;

const S = {
  CarouselContainer: styled.div`
    display: flex;
    transition: 0.3s;
  `,
};
