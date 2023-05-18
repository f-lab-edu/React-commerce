import { IOption } from '@interfaces/Options';
import React, { useContext } from 'react';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';

const OptionSelectTitle = ({ level, data }: { level: number; data: IOption[] | undefined }) => {
  const optionData = useContext(ProductOptionsContext);
  if (optionData === null) return null;
  const curSelect =
    data && (optionData.selected[level] === undefined ? '선택해주세요' : data[optionData.selected[level]].value);

  return (
    <span>
      <em>{optionData.options?.names[level]}</em>
      {curSelect}
    </span>
  );
};

export default OptionSelectTitle;
