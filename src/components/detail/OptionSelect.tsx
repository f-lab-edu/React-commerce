import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ProductDispatchContext, ProductOptionsContext } from 'src/context/ProductOptionsContext';
import useDataFilter from 'src/hooks/useDataFilter';
import { IOption } from '@interfaces/Options';
import OptionSelectTitle from './OptionSelectTitle';
import OptionItems from './OptionItems';

const OptionSelect = ({ level }: { level: number }) => {
  const detailData = useContext(ProductDetailContext);
  const optionData = useContext(ProductOptionsContext);
  const dispatch = useContext(ProductDispatchContext);
  const [toggle, setToggle] = useState<boolean>(() => optionData?.selected[level] === undefined);
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
      <S.OptionTitle onClick={() => toggleHandler()} toggle={toggle}>
        <OptionSelectTitle level={level} data={data} />
      </S.OptionTitle>
      {toggle && data && (
        <OptionItems
          data={data}
          selectHandler={selectHandler}
          selected={optionData.selected[level]}
          basePrice={basePrice}
        />
      )}
    </S.Wrap>
  );
};

export default OptionSelect;

const S = {
  Wrap: styled.div`
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 2px;
    margin: 10px 0;
  `,
  OptionTitle: styled.button<{ toggle: boolean }>`
    background-color: ${ColorSet.backgroundGray};
    border: none;
    text-align: start;
    position: relative;
    font-size: 16px;
    padding: 15px;
    width: 100%;
    &:after {
      content: '<';
      position: absolute;
      right: 15px;
      top: 15px;
      display: inline-block;
      color: ${ColorSet.textGray};
      transform: ${(props) => (props.toggle ? 'rotate(90deg)' : 'rotate(-90deg)')};
    }
  `,
};
