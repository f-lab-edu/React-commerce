import React, { useState } from 'react';
import MiddleNavbar from '@components/common/organism/MiddleNavbar';
import ProductItems from '../organism/ProductItems';

const ProductSection = () => {
  const [category, setCategory] = useState('전체');

  return (
    <>
      <MiddleNavbar category={category} setCategory={setCategory} />
      <ProductItems category={category} />
    </>
  );
};

export default ProductSection;
