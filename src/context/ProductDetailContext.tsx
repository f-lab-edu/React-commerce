import React, { createContext } from 'react';
import IProductDetail from '@interfaces/detail';

const ProductDetailContext = createContext<IProductDetail | null>(null);
export default ProductDetailContext;
