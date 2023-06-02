import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ColorSet } from 'src/utils/constant';
import ProductDetailContext from 'src/context/ProductDetailContext';
import Announce from '@components/common/atom/Announce';
import { ProductDispatchContext, ProductOptionsContext } from 'src/context/ProductOptionsContext';
import useDataFilter from 'src/hooks/useDataFilter';
import OptionItemTitle from './OptionItemTitle';
import DetailOptionItems from './DetailOptionItems';

const OptionItem = ({ level }: { level: number }) => {
  const detailData = useContext(ProductDetailContext);
  const optionData = useContext(ProductOptionsContext);
  const dispatch = useContext(ProductDispatchContext);
  const [isDetailOptionShow, setIsDetailOptionShow] = useState<boolean>(() => optionData?.selected[level] === undefined);
  const data = useDataFilter(level);
  const [modalShow, setModalShow] = useState<boolean>(false);

  if (optionData === null || detailData === null) return null;
  const basePrice = detailData.talkDeal ? detailData.talkDeal.discountPrice : detailData.price.standardPrice;

  const detailOptionShowHandler = () => {
    if (optionData.selected.length < level) {
      setModalShow(true);
      return;
    }
    setIsDetailOptionShow((prev) => !prev);
  };

  const selectHandler = (index: number) => {
    setIsDetailOptionShow(false);
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
            originTotalPrice: detailData.price.standardPrice,
            originPrice: detailData.price.standardPrice,
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
      <S.TitleWrap onClick={() => detailOptionShowHandler()} toggle={isDetailOptionShow}>
        <OptionItemTitle level={level} data={data} />
      </S.TitleWrap>
      {isDetailOptionShow && data && <DetailOptionItems data={data} selectHandler={selectHandler} selected={optionData.selected[level]} basePrice={basePrice} />}
      {modalShow && <Announce content={`${optionData.options?.names[optionData.selected.length]} 먼저 선택 해주세요`} controller={setModalShow} />}
    </S.Wrap>
  );
};

export default OptionItem;

const S = {
  Wrap: styled.div`
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 2px;
    margin: 10px 0;
  `,
  TitleWrap: styled.button<{ toggle: boolean }>`
    cursor: pointer;
    background-color: ${ColorSet.backgroundGray};
    border: none;
    text-align: start;
    position: relative;
    font-size: 16px;
    padding: 15px 25px 15px 15px;
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
