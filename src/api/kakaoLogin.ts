import axios from 'axios';

export interface TokenResponse {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export const getToken = async (code: string) => {
  try {
    const token = await axios.post<TokenResponse>(
      'https://kauth.kakao.com/oauth/token',
      { grant_type: 'authorization_code', client_id: process.env.REACT_APP_REST_API, redirect_uri: process.env.REACT_APP_REDIRECT_URI, code },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    return token.data;
  } catch (e) {
    throw Error('error');
  }
};

export const getUserData = async (token: any) => {
  try {
    const userInfo = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${token.access_token}`, 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
    });
    return userInfo.data;
  } catch (e) {
    throw Error('error');
  }
};
