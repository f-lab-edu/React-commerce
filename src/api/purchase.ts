import axios from 'axios';

interface IKaKaoReady {
  tid: string;
  next_redirect_app_url: string;
  next_redirect_mobile_url: string;
  next_redirect_pc_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;
  created_at: string;
}

const kakaoPay = async (itemName: string, quantity: number, amount: number): Promise<any> => {
  try {
    const response = await axios.post<IKaKaoReady>(
      'https://kapi.kakao.com/v1/payment/ready',
      {
        cid: 'TC0ONETIME',
        partner_order_id: 'test',
        partner_user_id: 'test@test.com',
        item_name: itemName,
        quantity,
        total_amount: amount,
        tax_free_amount: 0,
        approval_url: 'http://localhost:3000/pay_success',
        cancel_url: 'http://localhost:3000/pay',
        fail_url: 'http://localhost:3000/pay',
      },
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );
    return response.data;
  } catch (e) {
    throw new Error('카카오 페이 결제 요청 실패');
  }
};

const tossPG = async (method: string, itemName: string, amount: number) => {
  try {
    const response = await axios.post(
      'https://api.tosspayments.com/v1/payments',
      {
        amount,
        failUrl: 'http://localhost:3000/pay',
        method: `${method}`,
        orderId: `Testing${Math.floor(Math.random() * 10000000)}`,
        orderName: itemName,
        successUrl: 'http://localhost:3000/pay_success',
      },
      { headers: { Authorization: 'Basic dGVzdF9za196WExrS0V5cE5BcldtbzUwblgzbG1lYXhZRzVSOg==', 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (e) {
    throw new Error('pg결제 요청 실패');
  }
};

const kakaoPayApprove = async (token: string, tid: string): Promise<any> => {
  try {
    const response = await axios.post(
      'https://kapi.kakao.com/v1/payment/approve',
      { cid: 'TC0ONETIME', tid, partner_order_id: 'test', partner_user_id: 'test@test.com', pg_token: token },
      { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`, 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' } }
    );
    return response.data;
  } catch (e) {
    throw new Error('카카오 결제 승인 실패');
  }
};

const tossPgApprove = async (amount: number, orderId: string, paymentKey: string) => {
  try {
    const response = await axios.post(
      'https://api.tosspayments.com/v1/payments/confirm',
      { amount, orderId, paymentKey },
      { headers: { Authorization: 'Basic dGVzdF9za196WExrS0V5cE5BcldtbzUwblgzbG1lYXhZRzVSOg==', 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (e) {
    throw new Error('pg결제 승인 실패');
  }
};

export { kakaoPay, tossPG, kakaoPayApprove, tossPgApprove };
