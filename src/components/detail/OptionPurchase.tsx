import React, { useContext } from 'react';
import { ISelectedProducts } from 'src/context/ProductOptionsContext';
import { setProductLocalStorage } from 'src/utils/localStorage';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';
import ProductDetailContext from 'src/context/ProductDetailContext';

const OptionPurchase = ({ products }: { products: ISelectedProducts }) => {
  const productDetail = useContext(ProductDetailContext);
  if (productDetail === null) return null;
  return (
    <S.Wrap>
      <S.Item flex={1} backgroundColor={ColorSet.backgroundGray} color="white">
        <S.ItemInner>❤️</S.ItemInner>
      </S.Item>
      <S.Item
        flex={1}
        backgroundColor={ColorSet.backgroundBlack}
        color="white"
        onClick={() => {
          setProductLocalStorage(productDetail, products);
        }}
      >
        <S.ItemInner>🧺</S.ItemInner>
      </S.Item>
      <S.Item flex={3} backgroundColor={ColorSet.backgroundYellow} color="black">
        바로구매
      </S.Item>
    </S.Wrap>
  );
};

export default OptionPurchase;

const S = {
  Wrap: styled.div`
    display: flex;
    height: 60px;
  `,
  Item: styled.button<{ flex: number; backgroundColor: string; color: string }>`
    flex: ${(props) => props.flex};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    margin: 2px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
  `,
  ItemInner: styled.span`
    font-size: 30px;
  `,
};
