import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '@components/common/atom/Spinner';
import { kakaoPayApprove, tossPgApprove } from 'src/api/purchase';
import { ColorSet } from 'src/utils/constant';

const PaySuccess = () => {
  const [complete, setComplete] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const pg = sessionStorage.getItem('pg');
      if (pg === null) throw new Error();
      const { domain, tid } = JSON.parse(pg);
      if (domain === 'kakao') {
        try {
          const token = searchParams.get('pg_token');
          if (token === null || tid === undefined) throw new Error();
          await kakaoPayApprove(token, tid);
          setComplete(true);
        } catch (e) {
          throw new Error('카카오 페이 결제 승인 실패');
        }
      } else {
        const amount = searchParams.get('amount');
        const orderId = searchParams.get('orderId');
        const paymentKey = searchParams.get('paymentKey');
        try {
          if (amount === null || orderId === null || paymentKey === null) throw new Error();
          await tossPgApprove(Number(amount), orderId, paymentKey);
          setComplete(true);
        } catch (e) {
          throw new Error('토스 결제 승인 실패');
        }
      }
    })();
  }, []);

  if (complete) {
    return (
      <S.Background>
        <S.Wrap>
          <S.Announce>🎉 결제가 완료되었습니다.</S.Announce>
          <S.HomeBtn to="/">홈으로</S.HomeBtn>
        </S.Wrap>
      </S.Background>
    );
  }

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default PaySuccess;

const S = {
  Background: styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${ColorSet.backgroundGray};
    color: ${ColorSet.textBlack};
    padding: 30px 0;
  `,
  Wrap: styled.div`
    background-color: white;
    margin: auto auto;
    padding: 80px;
    width: 870px;
    border-radius: 10px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Announce: styled.div`
    font-size: 40px;
    font-weight: 500;
  `,
  HomeBtn: styled(Link)`
    border: none;
    font-size: 18px;
    text-decoration: none;
    border-radius: 10px;
    margin-top: 30px;
    width: 80px;
    line-height: 40px;
    color: white;
    text-align: center;
    background-color: ${ColorSet.backgroundYellow};
  `,
};
