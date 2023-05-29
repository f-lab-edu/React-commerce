import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinner from '@components/common/atom/Spinner';
import { kakaoPayApprove, tossPgApprove } from 'src/api/purchase';

const PayApprove = () => {
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
        } catch (e) {
          throw new Error('토스 결제 승인 실패');
        }
      }
      window.location.replace('/pay_success');
    })();
  }, []);

  return <Spinner />;
};

export default PayApprove;
