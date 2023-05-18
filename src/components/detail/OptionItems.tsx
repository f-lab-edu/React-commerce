import React, { useContext } from 'react';
import { IOption } from '@interfaces/Options';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';

interface Props {
  data: IOption[];
  selectHandler: (index: number) => void;
  selected: number | undefined;
  basePrice: number;
}
const OptionItems = ({ data, selectHandler, selected, basePrice }: Props) => {
  const priceCalculator = (index: number) => {
    if (
      (data[index].soldOut && data[index].soldOut === true) ||
      (data[index].stock !== undefined && data[index].stock === 0)
    ) {
      return '품절';
    }
    if (data[index].addPrice === undefined) {
      if (data[index].minAddPrice === data[index].maxAddPrice) {
        return `${(basePrice + Number(data[index].minAddPrice)).toLocaleString('ko-KR')}원`;
      }
      return `${(basePrice + Number(data[index].minAddPrice)).toLocaleString('ko-KR')}원 ~ ${(
        basePrice + Number(data[index].maxAddPrice)
      ).toLocaleString('ko-KR')}원`;
    }
    return `${(basePrice + Number(data[index].addPrice)).toLocaleString('ko-KR')}원`;
  };
  return (
    <S.Wrap>
      {data?.map((e, index) => {
        return (
          <S.Item
            onClick={() => {
              console.log(Boolean(e.stock) && e.stock === 0);
              if ((e.soldOut && e.soldOut) || (e.stock !== undefined && e.stock === 0)) {
                alert('품절된 상품입니다.');
                return;
              }
              selectHandler(index);
            }}
            key={e.name.repeat(index)}
            selected={selected === index}
          >
            <span>{e.value}</span>
            <br />
            <span>{priceCalculator(index)}</span>
          </S.Item>
        );
      })}
    </S.Wrap>
  );
};

export default OptionItems;

const S = {
  Wrap: styled.ul``,
  Item: styled.li<{ selected: boolean }>`
    list-style: none;
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
    background-color: ${(props) => props.selected && ColorSet.backgroundGray};
    font-weight: ${(props) => props.selected && '700'};
    &:before {
      content: '${(props) => props.selected && '✅ '}';
    }
  `,
};
