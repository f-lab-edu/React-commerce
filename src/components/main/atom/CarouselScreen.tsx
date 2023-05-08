import React from 'react';
import styled from 'styled-components';

interface Props {
  bannerUrl: string;
  name: string;
  mainCopyColor: string;
  mainCopy: string;
  subCopyColor: string;
  subCopy: string;
}

function CarouselSlide({ bannerUrl, name, mainCopy, mainCopyColor, subCopy, subCopyColor }: Props) {
  return (
    <S.CarouselScreen>
      <S.Copy>
        <S.SubCopy color={subCopyColor}>{subCopy}</S.SubCopy>
        <S.MainCopy color={mainCopyColor}>{mainCopy}</S.MainCopy>
      </S.Copy>
      <img src={bannerUrl} alt={name} width={1920} height={300} />
    </S.CarouselScreen>
  );
}

export default CarouselSlide;

const S = {
  CarouselScreen: styled.div`
    position: relative;
  `,
  SubCopy: styled.span<{ color: string }>`
    color: ${(props) => props.color};
    font-size: 20px;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  `,
  MainCopy: styled.span<{ color: string }>`
    display: block;
    padding-top: 14px;
    line-height: 41px;
    color: ${(props) => props.color};
    font-size: 32px;
    @media (max-width: 780px) {
      font-size: 25px;
    }
  `,
  Copy: styled.span`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    top: 25%;
    left: 15%;
    white-space: pre-wrap;
  `,
};
