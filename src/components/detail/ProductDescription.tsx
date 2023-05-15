import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ProductDetailContext from 'src/context/ProductDetailContext';
import { ColorSet } from 'src/utils/constant';

const ProductDescription = () => {
  const [fold, setFold] = useState(true);
  const data = useContext(ProductDetailContext);
  if (data === null) return <h2>로드중</h2>;
  return (
    <S.Wrap>
      <S.Warning>
        <S.WarningTitle>직거래 유도 주의 안내</S.WarningTitle>
        <br />
        판매자가 할인 등을 조건으로 문자/카톡 메시지로 <S.Strong>현금결제를 유도하면 입금하지 마시고</S.Strong>{' '}
        쇼핑하기로 신고해주세요.
      </S.Warning>
      <S.Description fold={fold}>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        {fold ? (
          <S.Fold onClick={() => setFold(!fold)} fold={fold}>
            상품설명 펼치기
          </S.Fold>
        ) : (
          <S.Fold onClick={() => setFold(!fold)} fold={fold}>
            상품설명 접기
          </S.Fold>
        )}
      </S.Description>
    </S.Wrap>
  );
};

export default ProductDescription;

const S = {
  Wrap: styled.div`
    margin-top: 50px;
  `,
  Warning: styled.div`
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: ${ColorSet.textGray};
    border: 1px solid ${ColorSet.borderGray};
    background-color: ${ColorSet.backgroundGray};
    margin-bottom: 30px;
  `,
  WarningTitle: styled.div`
    color: ${ColorSet.textBlack};
    font-size: 20px;
  `,
  Strong: styled.strong`
    color: ${ColorSet.textRed};
  `,
  Description: styled.div<{ fold: boolean }>`
    display: flex;
    justify-content: center;
    height: ${(props) => props.fold && '4000px'};
    overflow-y: ${(props) => props.fold && 'hidden'};
    position: relative;
  `,
  Fold: styled.div<{ fold: boolean }>`
    background-color: ${ColorSet.backgroundGray};
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    bottom: 0;
    &:before {
      line-height: 40px;
      display: inline-block;
      margin-right: 10px;
      font-size: 25px;
      content: '>';
      transform: rotate(${(props) => (props.fold ? '90deg' : '-90deg')});
    }
  `,
};
