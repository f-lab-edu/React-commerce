import React, { useContext } from 'react';
import { ISelectedProduct, ProductDispatchContext } from 'src/context/ProductOptionsContext';
import { ColorSet } from 'src/utils/constant';
import styled from 'styled-components';

const SelectedProduct = ({ id, payload }: { id: string; payload: ISelectedProduct }) => {
  const dispatch = useContext(ProductDispatchContext);
  return (
    <S.Wrap>
      <S.ProductName> {payload.value}</S.ProductName>
      <S.DeleteBtn
        onClick={() => {
          dispatch?.dispatch({
            type: 'DELETE_PRODUCT',
            id,
            payload,
          });
        }}
      >
        X
      </S.DeleteBtn>
      <S.ProductOptions>{payload.options.join(' ')}</S.ProductOptions>
      <S.PriceBox>
        <S.CountBox>
          <S.CountBtn
            type="button"
            onClick={() => {
              payload.count > 1 &&
                dispatch?.dispatch({
                  type: 'UPDATE_PRODUCT',
                  id,
                  payload: {
                    ...payload,
                    count: payload.count - 1,
                    totalPrice: payload.totalPrice - payload.singlePrice,
                  },
                });
            }}
          >
            -
          </S.CountBtn>
          <S.Count>{payload.count}</S.Count>
          <S.CountBtn
            type="button"
            onClick={() => {
              dispatch?.dispatch({
                type: 'UPDATE_PRODUCT',
                id,
                payload: {
                  ...payload,
                  count: payload.count + 1,
                  totalPrice: payload.totalPrice + payload.singlePrice,
                },
              });
            }}
          >
            +
          </S.CountBtn>
        </S.CountBox>
        <S.Price>{`${payload.totalPrice.toLocaleString('ko-KR')}원`}</S.Price>
      </S.PriceBox>
    </S.Wrap>
  );
};

export default SelectedProduct;

const S = {
  Wrap: styled.div`
    background-color: ${ColorSet.backgroundGray};
    border-radius: 2px;
    padding: 20px;
    line-height: 20px;
    box-sizing: border-box;
    position: relative;
  `,
  DeleteBtn: styled.button`
    position: absolute;
    border: none;
    background-color: inherit;
    top: 20px;
    right: 10px;
    font-size: 15px;
    color: ${ColorSet.textGray};
  `,
  ProductName: styled.div`
    font-weight: 350;
  `,
  ProductOptions: styled.div`
    color: ${ColorSet.textGray};
    font-size: 14px;
  `,
  PriceBox: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Price: styled.span`
    font-size: 18px;
  `,
  CountBox: styled.div`
    display: inline-flex;
    width: 120px;
    height: 30px;
    background-color: white;
  `,
  Count: styled.div`
    flex: 3;
    text-align: center;
    line-height: 30px;
    border: 1px solid ${ColorSet.borderGray};
  `,
  CountBtn: styled.button`
    flex: 1;
    border: 1px solid ${ColorSet.borderGray};
    background-color: inherit;
  `,
};
