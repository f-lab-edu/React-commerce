import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import IreviewBest from '@interfaces/reviewBest';

const ReviewBestTalkDeal = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IreviewBest[]>();

  useEffect(() => {
    axios.get(`/reviewBestDeal/?page=${page}`).then((response: AxiosResponse<IreviewBest[]>) => {
      setData(response.data);
    });
  }, [page]);

  const prevBtnHandler = () => {
    page === 0 ? setPage(11) : setPage((prev) => prev - 1);
  };
  const nextBtnHandler = () => {
    page === 11 ? setPage(0) : setPage((prev) => prev + 1);
  };
  useEffect(() => {});
  return (
    <S.layout>
      <S.title>✏️ 후기 증명 BEST 톡딜</S.title>
      {data ? (
        data.map((product: IreviewBest, index) => {
          return (
            <S.container>
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
        })
      ) : (
        <div>로딩중중중중</div>
      )}

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
  container: styled.div`
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
    font-size: 15px;
  `,
  moveSection: styled.div`
    width: 100%;
    text-align: center;
    color: gray;
  `,
  button: styled.button`
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
