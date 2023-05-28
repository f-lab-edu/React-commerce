import React, { useContext } from 'react';
import { ProductOptionsContext } from 'src/context/ProductOptionsContext';

const useDataFilter = (level: number) => {
  const optionData = useContext(ProductOptionsContext);
  let data = optionData?.options?.options;
  if (data !== undefined && optionData !== null) {
    for (let i = 0; i < level; i += 1) {
      if (optionData.selected[i] === undefined) {
        return undefined;
      }
      data = data[optionData.selected[i]].options;
    }
  }

  return data;
};

export default useDataFilter;
