import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useDebounce from 'src/hooks/useDebounce';
import CarouselBtn from '../atom/CarouselBtn';
import CarouselContainer from '../molecule/CarouselContainer';

function Carousel() {
  const [curIndex, setIndex] = useState<number>(0);
  const slideContainer = useRef<HTMLDivElement>(null);
  const slideBtnHandler = (direction: string) => {
    direction === 'left' ? setIndex((prev) => prev - 1) : setIndex((prev) => prev + 1);
  };

  useDebounce(() => setIndex((prev) => prev + 1), 5000);

  useEffect(() => {
    const container = slideContainer.current;
    if (container) {
      if (container.childNodes.length === curIndex) {
        setIndex(0);
      }
      if (curIndex === -1) {
        setIndex(container.childNodes.length - 1);
      }
      container.style.transform = `translateX(-${curIndex * 1920}px)`;
    }
  }, [curIndex]);

  return (
    <S.Carousel>
      <CarouselContainer ref={slideContainer} />
      <CarouselBtn direction="left" click={() => slideBtnHandler('left')} />
      <CarouselBtn direction="right" click={() => slideBtnHandler('right')} />
    </S.Carousel>
  );
}

export default Carousel;

const S = {
  Carousel: styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    height: 300px;
    margin: 0 auto;
    max-width: 1920px;
    min-width: 1280px;
  `,
};
