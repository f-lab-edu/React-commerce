import React from 'react';
import { ISelectedProducts } from 'src/context/ProductOptionsContext';
import SelectedProduct from './SelectedProduct';

const SelectedProducts = ({ products }: { products: ISelectedProducts }) => {
  return (
    <>
      {Object.entries(products).map(([id, payload]) => (
        <SelectedProduct key={id} id={id} payload={payload} />
      ))}
    </>
  );
};

export default SelectedProducts;
