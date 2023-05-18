import React, { useContext } from 'react';
import styled from 'styled-components';
import { IOption } from '@interfaces/Options';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';

const OptionSelectTitle = ({ level, data }: { level: number; data: IOption[] | undefined }) => {
  const optionData = useContext(ProductOptionsContext);
  if (optionData === null) return null;

  const curSelect =
    data && (optionData.selected[level] === undefined ? '선택안함' : data[optionData.selected[level]].value);

  return (
    <>
      <S.OptionName>{optionData.options?.names[level]}</S.OptionName>
      <S.OptionSelected>{curSelect}</S.OptionSelected>
    </>
  );
};

export default OptionSelectTitle;

const S = {
  OptionName: styled.span`
    margin-right: 10px;
  `,
  OptionSelected: styled.span`
    color: ${ColorSet.textGray};
    font-size: 15px;
  `,
};
