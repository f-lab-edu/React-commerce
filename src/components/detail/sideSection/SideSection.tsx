import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import DeliveryFee from './DeliveryFee';
import SelectedProducts from './SelectedProducts';
import OptionSelectResult from './OptionSelectResult';
import OptionPurchase from './OptionPurchase';
import OptionItems from './OptionItems';

const SideSection = () => {
  const optionData = useContext(ProductOptionsContext);

  if (optionData === null) return null;
  return (
    <S.SideSection>
      <S.Wrap>
        <S.OptionSelectSection>
          <S.OptionSelectTitle>옵션선택</S.OptionSelectTitle>
          {optionData.options !== undefined && <OptionItems options={optionData.options} />}
          <SelectedProducts products={optionData.products} />
        </S.OptionSelectSection>
        <DeliveryFee />
        <OptionSelectResult products={optionData.products} />
        <OptionPurchase products={optionData.products} />
      </S.Wrap>
    </S.SideSection>
  );
};

export default SideSection;

const S = {
  SideSection: styled.div`
    padding: 30px 0 30px 30px;
    flex: 1;
  `,
  Wrap: styled.div`
    position: sticky;
    top: 100px;
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
