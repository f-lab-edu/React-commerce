import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import ProductBoxImage from '@components/common/atom/ProductBoxImage';
import ProductBoxAboutPrice from '@components/common/molecule/ProductBoxAboutPrice';
import { Link } from 'react-router-dom';

interface IspecialCard {
  id: number;
  name: string;
  firstImageUrl: string;
  landingType: string;
  landingUrl: string;
  specialCardTitle: string;
  specialCardDescription: string;
  specialCardSlot1: number;
  specialCardSlot2: number;
  specialCardPrimaryColor: string;
  specialCardSecondaryColor: string;
  specialCardBackgroundColor: string;
  remainSeconds: number;
  copyColor: string;
  copyExpose: boolean;
  ad: boolean;
  displayPeriod: { from: string; to: string };
}

const SpecialCard = () => {
  const [data, setData] = useState<IspecialCard | null>(null);
  useEffect(() => {
    axios.get('./specialCard').then((response: AxiosResponse<IspecialCard>) => {
      setData(response.data);
    });
  }, []);
  if (!data) {
    return <div>로디이이이이이잉</div>;
  }
  return (
    <S.specialCard backgroundColor={data.specialCardBackgroundColor}>
      <S.innerWrap to={data.landingUrl}>
        <ProductBoxImage src={data.firstImageUrl} alt={data.name} />
        <S.cardInfo>
          <S.title specialCardPrimaryColor={data.specialCardPrimaryColor}>{data.specialCardTitle}</S.title>
          <S.subtitle>{data.specialCardDescription}</S.subtitle>
          <ProductBoxAboutPrice
            specialDeal={false}
            originPrice={data.specialCardSlot2}
            discountPrice={data.specialCardSlot1}
          />
        </S.cardInfo>
      </S.innerWrap>
    </S.specialCard>
  );
};

const S = {
  specialCard: styled.div<{ backgroundColor: string }>`
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor};
    overeflow: hidden;
  `,
  innerWrap: styled(Link)`
    text-decoration: none;
  `,
  cardInfo: styled.div`
    box-sizing: border-box;
    padding: 20px;
    color: white;
  `,
  title: styled.div<{ specialCardPrimaryColor: string }>`
    color: ${(props) => props.specialCardPrimaryColor};
    font-weight: 600;
    font-size: 12px;
  `,
  subtitle: styled.div`
    white-space: pre-wrap;
    line-height: 20px;
    margin: 10px 0;
  `,
};

export default SpecialCard;
