import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductDispatchContext, ProductOptionsContext } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import OptionSelect from './OptionSelect';
import OptionDeliveryFee from './OptionDeliveryFee';

const SideSection = () => {
  const optionData = useContext(ProductOptionsContext);
  const dispatch = useContext(ProductDispatchContext);
  if (optionData === null) return null;
  return (
    <S.Wrap>
      <S.OptionSelectSection>
        <S.OptionSelectTitle>옵션선택</S.OptionSelectTitle>
        {optionData.options?.names.map((e, index) => (
          <OptionSelect level={index} key={e} />
        ))}
        {Object.entries(optionData.products).map(([id, payload]) => (
          <div key={id}>
            {payload.value}
            <br />
            {payload.options.join(' ')}
            <br />
            <button
              type="button"
              onClick={() => {
                payload.count > 1 &&
                  dispatch?.dispatch({
                    type: 'UPDATE_PRODUCT',
                    id,
                    payload: {
                      ...payload,
                      count: payload.count - 1,
                      totalPrice: payload.totalPrice - payload.singlePrice,
                    },
                  });
              }}
            >
              -
            </button>
            {payload.count}
            <button
              type="button"
              onClick={() => {
                dispatch?.dispatch({
                  type: 'UPDATE_PRODUCT',
                  id,
                  payload: {
                    ...payload,
                    count: payload.count + 1,
                    totalPrice: payload.totalPrice + payload.singlePrice,
                  },
                });
              }}
            >
              +
            </button>
            <br />
            {`${payload.totalPrice.toLocaleString('ko-KR')}원`}
          </div>
        ))}
      </S.OptionSelectSection>
      <OptionDeliveryFee />
    </S.Wrap>
  );
};

export default SideSection;

const S = {
  Wrap: styled.div`
    box-sizing: border-box;
    padding: 30px 0 30px 30px;
    min-height: 350px;
  `,
  OptionSelectSection: styled.div`
    max-height: 450px;
    overflow-y: auto;
  `,
  OptionSelectTitle: styled.h3`
    font-weight: 700;
    font-size: 18px;
    color: ${ColorSet.textBlack};
    line-height: 30px;
  `,
};
