import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ColorSet } from 'src/utils/constant';

const ProductImageBox = () => {
  const data = useContext(ProductDetailContext);
  const [index, setIndex] = useState<number>(0);
  if (data == null) return <h2>스켈레톤 이미지</h2>;

  return (
    <S.Wrap>
      <img src={data.image.images[index]} width={430} height={430} alt={`상품이미지${index}`} />
      <S.SubImageBox>
        {data.image.images.map((image, i) => {
          if (i === index) {
            return (
              <S.SelectedSubImage
                width={60}
                height={60}
                key={image[i]}
                src={data.image.images[i]}
                alt={`상품이미지${i}`}
                onClick={() => setIndex(i)}
              />
            );
          }
          return (
            <S.SubImage
              key={image[i]}
              width={60}
              height={60}
              src={data.image.images[i]}
              alt={`상품이미지${i}`}
              onClick={() => setIndex(i)}
              role="presentation"
            />
          );
        })}
      </S.SubImageBox>
    </S.Wrap>
  );
};

export default ProductImageBox;

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SubImageBox: styled.div`
    padding-top: 20px;
    justfy-content: center;
    display: flex;
  `,
  SelectedSubImage: styled.img`
    border: 2px solid ${ColorSet.borderBlue};
    margin: 0 2px;
  `,
  SubImage: styled.img`
    margin-right: 5px;
  `,
};
