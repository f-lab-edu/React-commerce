import React from 'react';
import ProductBoughtUserProfile from '../atom/ProductBoughtUserProfile';

function ProductBoughtUserProfileList({ profileUrlList }: { profileUrlList: string[] }) {
  return (
    <span>
      <ProductBoughtUserProfile profileUrl={profileUrlList[0]} index={0} />
      <ProductBoughtUserProfile profileUrl={profileUrlList[1]} index={1} />
      <ProductBoughtUserProfile profileUrl={profileUrlList[2]} index={2} />
    </span>
  );
}

export default ProductBoughtUserProfileList;
