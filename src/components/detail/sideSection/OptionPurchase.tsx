import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISelectedProducts } from 'src/context/ProductOptionsContext';
import { setProductLocalStorage } from 'src/utils/localStorage';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { RootState } from 'src/reducers';
import Announce from '@components/common/atom/Announce';

const OptionPurchase = ({ products }: { products: ISelectedProducts }) => {
  const productDetail = useContext(ProductDetailContext);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const like = useSelector((state: RootState) => state.user.like);
  if (productDetail === null) return null;
  const isLiked = like.includes(productDetail.name);
  return (
    <S.Wrap>
      <S.Item
        flex={1}
        backgroundColor={ColorSet.backgroundGray}
        color="black"
        onClick={() => (isLiked ? dispatch({ type: 'DELETE_LIKE', payload: productDetail.name }) : dispatch({ type: 'ADD_LIKE', payload: productDetail.name }))}
      >
        <S.ItemInner>{isLiked ? '❤️' : '♡'} </S.ItemInner>
      </S.Item>
      <S.Item
        flex={1}
        backgroundColor={ColorSet.backgroundBlack}
        color="white"
        onClick={() => {
          if (Object.keys(products).length !== 0) {
            setModalShow(true);
            setProductLocalStorage(productDetail, products);
          }
        }}
      >
        <S.ItemInner>🧺</S.ItemInner>
      </S.Item>
      <S.Item flex={3} backgroundColor={ColorSet.backgroundYellow} color="black">
        바로구매
      </S.Item>
      {modalShow && <Announce content="장바구니에 상품이 담겼습니다." link="/cart" controller={setModalShow} />}
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
