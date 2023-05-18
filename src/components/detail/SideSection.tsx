import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import OptionSelect from './OptionSelect';
import OptionDeliveryFee from './OptionDeliveryFee';
import SelectedProduct from './SelectedProduct';

const SideSection = () => {
  const optionData = useContext(ProductOptionsContext);

  if (optionData === null) return null;
  return (
    <S.Wrap>
      <S.OptionSelectSection>
        <S.OptionSelectTitle>옵션선택</S.OptionSelectTitle>
        {optionData.options?.names.map((e, index) => (
          <OptionSelect level={index} key={e} />
        ))}
        {Object.entries(optionData.products).map(([id, payload]) => (
          <SelectedProduct key={id} id={id} payload={payload} />
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
