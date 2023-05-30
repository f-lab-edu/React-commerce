import React, { useState } from 'react';
import { IOption } from '@interfaces/option';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import Announce from '@components/common/atom/Announce';

interface Props {
  data: IOption[];
  selectHandler: (index: number) => void;
  selected: number | undefined;
  basePrice: number;
}
const DetailOptionItems = ({ data, selectHandler, selected, basePrice }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const priceCalculator = (index: number) => {
    if ((data[index].soldOut && data[index].soldOut === true) || (data[index].stock !== undefined && data[index].stock === 0)) {
      return '품절';
    }
    if (data[index].addPrice === undefined) {
      if (data[index].minAddPrice === data[index].maxAddPrice) {
        return `${(basePrice + Number(data[index].minAddPrice)).toLocaleString('ko-KR')}원`;
      }
      return `${(basePrice + Number(data[index].minAddPrice)).toLocaleString('ko-KR')}원 ~ ${(basePrice + Number(data[index].maxAddPrice)).toLocaleString('ko-KR')}원`;
    }
    return `${(basePrice + Number(data[index].addPrice)).toLocaleString('ko-KR')}원`;
  };
  return (
    <S.Wrap>
      {data?.map((e, index) => {
        return (
          <S.Item
            onClick={() => {
              if (e.soldOut || (e.stock !== undefined && e.stock === 0)) {
                setIsShow(true);
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
      {isShow && <Announce content="품절 된 상품입니다." controller={setIsShow} />}
    </S.Wrap>
  );
};

export default DetailOptionItems;

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
