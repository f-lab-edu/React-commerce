import React, { useState, useReducer, useMemo } from 'react';
import styled from 'styled-components';
import Mall from '@components/cart/Mall';
import { ColorSet } from 'src/utils/constant';
import CartContext, { cartReducer } from 'src/context/CartContext';
import Empty from '@components/cart/Empty';
import { useNavigate } from 'react-router-dom';
import calculateCartData from 'src/utils/calculateCartData';
import Announce from '@components/common/atom/Announce';

const Cart = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [localData, dispatch] = useReducer(cartReducer, {}, () => {
    let rawData = localStorage.getItem('cart');
    if (rawData === null) {
      localStorage.setItem('cart', JSON.stringify({ data: {} }));
      rawData = JSON.stringify({ data: {} });
    }
    return JSON.parse(rawData);
  });

  const providerValue = useMemo(
    () => ({
      localData,
      dispatch,
    }),
    [localData, dispatch]
  );

  const allSelectHandler = () => {
    if (!isChecked.checked) {
      dispatch({
        type: 'ALL_SELECTED',
      });
    } else {
      dispatch({
        type: 'ALL_UNSELECTED',
      });
    }
  };
  const orderHandler = (orderCount: number) => {
    if (orderCount) {
      navigate('/pay');
      sessionStorage.setItem('buying', JSON.stringify(localData));
    } else {
      setShowModal(true);
    }
  };

  const isChecked = calculateCartData(localData.data);

  return (
    <CartContext.Provider value={providerValue}>
      <S.Background>
        <S.Wrap>
          <S.Title>장바구니</S.Title>
          {Object.keys(localData.data).length === 0 ? (
            <Empty />
          ) : (
            <div>
              <S.SelectWrap>
                <S.SelectInnerWrap>
                  <S.Select type="checkbox" onChange={() => allSelectHandler()} checked={isChecked.checked} id="selectAll" />
                  <span>전체 선택</span>
                </S.SelectInnerWrap>
                <S.DeleteBtn onClick={() => dispatch({ type: 'SELECT_DELETE' })}>삭제</S.DeleteBtn>
              </S.SelectWrap>
              {Object.entries(localData.data).map(([key, value]) => (
                <Mall key={key} title={key} data={value} />
              ))}
              <S.OrderWrap>
                <S.Order onClick={() => setToggle(!toggle)} toggle={toggle}>
                  <S.Strong>주문 예상금액</S.Strong>
                </S.Order>
                {toggle && (
                  <S.OrderRecipt>
                    <S.OrderReciptItem>
                      <span>선택 상품금액({isChecked.count})개</span>
                      <span>{isChecked.optionPrice.originTotalPrice.toLocaleString()}원</span>
                    </S.OrderReciptItem>
                    <S.OrderReciptItem>
                      <S.DataTitle>할인 예상금액 합계</S.DataTitle>
                      <S.DataDef>
                        <S.Em>{(isChecked.optionPrice.totalPrice - isChecked.optionPrice.originTotalPrice).toLocaleString()}원</S.Em>
                      </S.DataDef>
                    </S.OrderReciptItem>
                    <S.OrderReciptItem>
                      <S.DataTitle>
                        <S.Strong>총 주문금액</S.Strong>
                      </S.DataTitle>
                      <S.DataDef>{isChecked.optionPrice.totalPrice.toLocaleString()}원</S.DataDef>
                    </S.OrderReciptItem>
                  </S.OrderRecipt>
                )}
                <S.OrderBtn onClick={() => orderHandler(isChecked.count)}>{isChecked.count}건 주문하기</S.OrderBtn>
              </S.OrderWrap>
            </div>
          )}
          {showModal && <Announce content="주문할 상품을 선택해주세요." controller={setShowModal} />}
        </S.Wrap>
      </S.Background>
    </CartContext.Provider>
  );
};

export default Cart;

const S = {
  Background: styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    color: ${ColorSet.textBlack};
    background-color: ${ColorSet.backgroundGray};
  `,
  Wrap: styled.div`
    padding-top: 30px;
    box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.1);
    width: 870px;
    margin: 0 auto;
  `,
  Title: styled.div`
    background-color: white;
    border-bottom: 1px solid ${ColorSet.borderGray};
    font-weight: 600;
    text-align: center;
    line-height: 40px;
  `,
  SelectWrap: styled.div`
    backgroud-color: ${ColorSet.backgroundGray};
    border-bottom: 1px solid ${ColorSet.borderGray};
    padding: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Select: styled.input`
    width: 20px;
    height: 20px;
    margin-right: 6px;
    &:checked {
      accent-color: ${ColorSet.backgroundYellow};
    }
  `,
  SelectInnerWrap: styled.div`
    display: flex;
    align-items: center;
  `,
  DeleteBtn: styled.button`
    background-color: white;
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 3px;
    padding: 5px 10px;
  `,
  OrderWrap: styled.div`
    position: relative;
    background-color: white;
  `,
  Order: styled.div<{ toggle: boolean }>`
    line-height: 40px;
    padding: 10px;
    border-bottom: 1px solid ${ColorSet.borderGray};
    &:after {
      position: absolute;
      right: 10px;
      display: inline-block;
      content: '>';
      transform: rotate(${(props) => (props.toggle ? '-90deg' : '90deg')});
    }
  `,
  Em: styled.em`
    color: ${ColorSet.textBlue};
  `,
  Strong: styled.em`
    font-size: 18px;
    font-weight: 600;
  `,
  OrderRecipt: styled.ul`
    line-height: 30px;
  `,
  OrderReciptItem: styled.li`
    font-size: 14px;
    font-weight: 600;
    display: flex;
    padding: 10px 0;
    margin: 0 10px;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px dashed ${ColorSet.borderGray};
    }
  `,
  DataTitle: styled.span``,
  DataDef: styled.span``,
  OrderBtn: styled.button`
    text-align: center;
    width: 100%;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    background-color: ${ColorSet.backgroundYellow};
    border: none;
  `,
};
