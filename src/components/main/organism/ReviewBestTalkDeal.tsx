import React, { useState } from 'react';
import styled from 'styled-components';
import IreviewBest from '@interfaces/reviewBest';
import useFetch from 'src/hooks/useFetch';
import { Link } from 'react-router-dom';
import { ColorSet } from 'src/utils/constant';

const ReviewBestTalkDeal = () => {
  const [page, setPage] = useState(0);
  const data = useFetch<IreviewBest[]>(`/reviewBestDeal/?page=${page}`, 'GET', page);

  const prevBtnHandler = () => {
    page === 0 ? setPage(11) : setPage((prev) => prev - 1);
  };
  const nextBtnHandler = () => {
    page === 11 ? setPage(0) : setPage((prev) => prev + 1);
  };
  if (data === undefined) return null;
  return (
    <S.layout>
      <S.title>✏️ 후기 증명 BEST 톡딜</S.title>
      {data.map((product: IreviewBest, index) => {
        return (
          <S.container key={product.productId} to={`detail/?productId=${product.productId}`}>
            <S.productImg src={data[index].productImage} />
            <S.productDescription>
              <S.productCount>{data[index].userCount.toLocaleString('ko-KR')}명이 참여한 딜</S.productCount>
              <S.productName>{data[index].productName}</S.productName>
              <S.productIcon />
            </S.productDescription>
            <S.productReview>
              <S.productReviewCount>
                😍 리뷰 {data[index].reviewCount}건 만족도 {data[index].productPositivePercentage}%
              </S.productReviewCount>
              <S.productReviewContent>{data[index].reviewContent}</S.productReviewContent>
            </S.productReview>
          </S.container>
        );
      })}

      <S.moveSection>
        <S.button onClick={prevBtnHandler}>{'<'}</S.button>
        <S.curpage>{page + 1}/12</S.curpage>
        <S.button onClick={nextBtnHandler}>{'>'}</S.button>
      </S.moveSection>
    </S.layout>
  );
};

const S = {
  layout: styled.div`
    padding: 40px 0;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  title: styled.h3`
    font-weight: 700;
    font-size: 18px;
  `,
  container: styled(Link)`
    text-decoration: none;
    color: ${ColorSet.textBlack};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 210px;
  `,
  productImg: styled.img`
    width: 48%;
    height: 100px;
    border-radius: 5px;
  `,
  productDescription: styled.div`
    width: 48%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  productCount: styled.div`
    color: gray;
    font-size: 14px;
  `,
  productName: styled.div`
    font-weight: 600;
  `,
  productIcon: styled.div``,
  productReview: styled.div`
    width: 100%;
    height: 100px;
    margin: 5px 0 5px 0;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    padding: 15px;
    background-color: #f8f9fa;
    overflow: scroll;
  `,
  productReviewCount: styled.div`
    font-size: 14px;
    color: #4684e9;
  `,
  productReviewContent: styled.div`
    margin-top: 10px;
    font-size: 14px;
  `,
  moveSection: styled.div`
    width: 100%;
    text-align: center;
    color: gray;
  `,
  button: styled.button`
    cursor: pointer;
    background-color: inherit;
    font-size: 15px;
    color: gray;
    width: 60px;
    height: 35px;
    border-radius: 4px;
    border: 1.5px solid #e7e8eb;
  `,
  curpage: styled.span`
    margin: 30px;
  `,
};
export default ReviewBestTalkDeal;
