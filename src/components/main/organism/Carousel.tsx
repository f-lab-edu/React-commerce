import React, { useCallback, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import CarouselBtn from '../atom/CarouselBtn';
import CarouselContainer from '../molecule/CarouselContainer';

const StyledCarousel = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 300px;
  width: 100%;
`;
let timer: ReturnType<typeof setTimeout>;
function Carousel() {
  const [curIndex, setIndex] = useState<number>(0);
  const slideContainer = useRef<HTMLDivElement>(null);

  const slideBtnHandler = useCallback<Function>((direction: string) => {
    direction === 'left' ? setIndex((prev) => prev - 1) : setIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    const container = slideContainer.current;
    if (container) {
      if (container.childNodes.length === curIndex) {
        setIndex(0);
      }
      if (curIndex === -1) {
        setIndex(container.childNodes.length - 1);
      }
      container.style.transform = `translateX(-${curIndex * window.innerWidth}px)`;
    }
  }, [curIndex]);

  return (
    <StyledCarousel>
      <CarouselContainer ref={slideContainer} />
      <CarouselBtn direction="left" click={() => slideBtnHandler('left')} />
      <CarouselBtn direction="right" click={() => slideBtnHandler('right')} />
    </StyledCarousel>
  );
}

export default Carousel;
