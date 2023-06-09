import React from 'react';
import IProductOptions from '@interfaces/Options';
import OptionItem from './OptionItem';

const OptionItems = ({ options }: { options: IProductOptions }) => {
  return (
    <>
      {options.names.map((e, index) => (
        <OptionItem level={index} key={e} />
      ))}
    </>
  );
};

export default OptionItems;
