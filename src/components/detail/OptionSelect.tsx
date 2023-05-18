import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ProductDispatchContext, ProductOptionsContext } from 'src/context/ProductOptionsContext';
import useDataFilter from 'src/hooks/useDataFilter';
import { IOption } from '@interfaces/Options';
import OptionSelectTitle from './OptionSelectTitle';

const OptionSelect = ({ level }: { level: number }) => {
  const detailData = useContext(ProductDetailContext);
  const optionData = useContext(ProductOptionsContext);
  const dispatch = useContext(ProductDispatchContext);
  const [toggle, setToggle] = useState<Boolean>(() => optionData?.selected[level] === undefined);
  const data = useDataFilter(level);

  if (optionData === null || detailData === null) return null;
  const basePrice = detailData.talkDeal ? detailData.talkDeal.discountPrice : detailData.price.standardPrice;

  const toggleHandler = () => {
    if (optionData.selected.length < level) {
      alert(`${optionData.options?.names[optionData.selected.length]}먼저 선택 해주세용`);
      return;
    }
    setToggle(!toggle);
  };

  const selectHandler = (index: number) => {
    setToggle(false);
    optionData.selected[level] = index;
    dispatch?.setSelected(optionData.selected.slice(0, level + 1));

    if (optionData.options?.names.length === optionData.selected.length && data) {
      let temp = optionData.options?.options;
      const selectedOptions = optionData.selected.map((value: number) => {
        if (temp === undefined) {
          return '';
        }
        const answer = temp;
        temp = temp[value]?.options;
        return answer[value].value;
      });
      if (data[index].addPrice !== undefined) {
        dispatch?.dispatch({
          type: 'ADD_PRODUCT',
          id: `${data[index].id}`,
          payload: {
            value: selectedOptions[0],
            options: selectedOptions.slice(1),
            singlePrice: Number(data[index].addPrice) + basePrice,
            totalPrice: Number(data[index].addPrice) + basePrice,
            count: 1,
          },
        });
        dispatch?.setSelected([]);
      }
    }
  };

  return (
    <S.Wrap>
      <S.Title onClick={() => toggleHandler()}>
        <OptionSelectTitle level={level} data={data} />
      </S.Title>
      {toggle &&
        data?.map((e, index) => (
          <S.Item
            onClick={() => {
              selectHandler(index);
            }}
            key={e.name.repeat(index)}
          >
            {e.value}
          </S.Item>
        ))}
    </S.Wrap>
  );
};

export default OptionSelect;

const S = {
  Wrap: styled.ul``,
  Title: styled.li`
    background-color: ${ColorSet.backgroundGray};
    font-size: 20px;
    padding: 10px;
    line-height: 44px;
  `,
  Item: styled.li`
    font-size: 18px;
    padding: 10px;
  `,
};
