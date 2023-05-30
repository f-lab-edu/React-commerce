import React, { createContext } from 'react';
import IProductDetail from '@interfaces/detailType';

const ProductDetailContext = createContext<IProductDetail | null>(null);
export default ProductDetailContext;
