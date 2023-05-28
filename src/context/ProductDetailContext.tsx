import React, { createContext } from 'react';
import IProductDetail from '@interfaces/Detail';

const ProductDetailContext = createContext<IProductDetail | null>(null);
export default ProductDetailContext;
