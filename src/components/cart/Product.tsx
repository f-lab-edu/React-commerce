import React, { useContext } from 'react';
import styled from 'styled-components';
import { IShopItem } from 'src/utils/localStorage';
import CartContext from 'src/context/CartContext';
import { ColorSet } from 'src/utils/constant';
import Option from './Option';

interface Props {
  title: string;
  data: IShopItem;
  mall: string;
}

const Product = ({ title, data, mall }: Props) => {
  const localStorageData = useContext(CartContext);
  if (localStorageData === null) return null;

  const productSelectHandler = () => {
    if (!data.selected) {
      localStorageData.dispatch({
        type: 'PRODUCT_SELECTED',
        mall,
        product: title,
      });
    }
    localStorageData.dispatch({
      type: 'PRODUCT_UNSELECTED',
      mall,
      product: title,
    });
  };
  return (
    <S.Wrap>
      <S.Description>
        <S.CheckBox type="checkbox" onChange={productSelectHandler} checked={data.selected} />
        <S.Img src={data.productImage} width={70} height={70} />
        <span>{title}</span>
      </S.Description>
      {Object.entries(data.options).map(([key, value]) => (
        <Option key={key} id={key} data={value} mall={mall} product={title} />
      ))}
      <S.PriceDetail>
        <S.Dt>상품금액</S.Dt>
        <S.Dd>{data.total.toLocaleString()}원</S.Dd>
        <S.Dt>할인금액</S.Dt>
        <S.Dd>
          <S.Em>{(data.estimated - data.total).toLocaleString()}원</S.Em>
        </S.Dd>
        <S.Dt>
          <S.Strong>주문금액</S.Strong>
        </S.Dt>
        <S.Dd>
          <S.Strong>{data.estimated.toLocaleString()}원</S.Strong>
        </S.Dd>
      </S.PriceDetail>
    </S.Wrap>
  );
};

export default Product;

const S = {
  Wrap: styled.ul`
    padding: 10px;
  `,
  CheckBox: styled.input`
    width: 20px;
    height: 20px;
    color: white;
    color-scheme: light;
    &:checked {
      border: none;
      accent-color: ${ColorSet.backgroundYellow};
    }
  `,
  Description: styled.li`
    display: flex;
    align-items: center;
    font-weight: 600;
  `,
  Img: styled.img`
    border-radius: 5px;
    margin: 10px;
  `,
  PriceDetail: styled.dl`
    margin: 10px 0 0 30px;
    padding: 10px;
    background-color: ${ColorSet.backgroundGray};
    border: 1px solid ${ColorSet.borderGray};
    color: ${ColorSet.textBlack};
    font-size: 15px;
    line-height: 20px;
  `,
  Dt: styled.dt`
    float: left;
  `,
  Dd: styled.dd`
    text-align: right;
  `,
  Em: styled.em`
    color: ${ColorSet.textBlue};
  `,
  Strong: styled.strong`
    font-weight: 700;
  `,
};
