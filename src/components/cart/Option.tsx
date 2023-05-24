import React, { useContext } from 'react';
import styled from 'styled-components';
import { ISelectedProduct } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import CartContext from 'src/context/CartContext';

interface Props {
  data: ISelectedProduct;
  id: string;
  mall: string;
  product: string;
}
const Option = ({ data, id, mall, product }: Props) => {
  const cartContextData = useContext(CartContext);
  if (cartContextData === null) return null;
  return (
    <S.Wrap>
      <S.Title>{data.value}</S.Title>
      <S.Content>
        <div>
          <S.DeleteBtn
            onClick={() => {
              cartContextData.dispatch({
                type: 'DELETE',
                mall,
                product,
                id,
              });
            }}
          >
            삭제
          </S.DeleteBtn>
          <S.CountBox>
            <S.CountBtn
              type="button"
              onClick={() => {
                cartContextData.dispatch({
                  type: 'DECREMENT',
                  mall,
                  product,
                  id,
                });
              }}
            >
              -
            </S.CountBtn>
            <S.Count>{data.count}</S.Count>
            <S.CountBtn
              type="button"
              onClick={() => {
                cartContextData.dispatch({
                  type: 'INCREMENT',
                  mall,
                  product,
                  id,
                });
              }}
            >
              +
            </S.CountBtn>
          </S.CountBox>
        </div>
        <S.Price>
          <S.OriginPrice>{data.originTotalPrice.toLocaleString()}원</S.OriginPrice>
          <S.DiscountPrice> {data.totalPrice.toLocaleString()}원</S.DiscountPrice>
        </S.Price>
      </S.Content>
    </S.Wrap>
  );
};

export default Option;

const S = {
  Wrap: styled.li`
    margin: 10px 0 0 30px;
    padding: 10px;
    border: 1px solid ${ColorSet.borderGray};
  `,
  Title: styled.div`
    font-size: 15px;
    color: ${ColorSet.textBlack};
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
  `,
  OriginPrice: styled.span`
    text-align: right;
    text-decoration: line-through;
    color: ${ColorSet.textGray};
    font-size: 14px;
  `,
  DiscountPrice: styled.span`
    font-weight: 600;
  `,
  Price: styled.span`
    display: flex;
    flex-direction: column;
  `,
  DeleteBtn: styled.button`
    background-color: inherit;
    border: 1px solid ${ColorSet.borderGray};
    margin-right: 10px;
    width: 50px;
    line-height: 25px;
    border-radius: 5px;
  `,
  CountBox: styled.div`
    display: inline-flex;
    width: 120px;
    height: 25px;
    background-color: white;
  `,
  Count: styled.div`
    flex: 3;
    text-align: center;
    line-height: 25px;
    border: 1px solid ${ColorSet.borderGray};
  `,
  CountBtn: styled.button`
    flex: 1;
    border: 1px solid ${ColorSet.borderGray};
    background-color: inherit;
  `,
};
