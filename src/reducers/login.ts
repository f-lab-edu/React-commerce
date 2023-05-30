import { put, takeEvery, call } from 'redux-saga/effects';
import { TokenResponse, getToken, getUserData } from 'src/api/kakaoLogin';
import { produce } from 'immer';

export const login = (code: string) => ({ type: 'LOGIN', code });
export const logout = () => ({ type: 'LOGOUT' });

interface User {
  nickname: string;
  profile_image: string;
  thumbnail_image: string;
  like: string[];
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  like: string[];
}
interface loginAction {
  type: string;
  code: string;
}
interface loginSuccessAction {
  type: string;
  userData: User;
}
interface likeAction {
  type: string;
  payload: string;
}

export const loginSaga = function* (action: loginAction): any {
  const { code } = action;
  try {
    const token: TokenResponse = yield call(getToken, code);
    const userInfo = yield call(getUserData, token);
    sessionStorage.setItem('user', JSON.stringify({ isAuthenticated: true, user: userInfo.properties, like: [], cart: 0 }));
    yield put({
      type: 'LOGIN_SUCCESS',
      userData: userInfo.properties,
    });
    window.location.replace('http://localhost:3000');
  } catch (e) {
    yield put({
      type: 'LOGIN_FAILED',
    });
  }
};

export const userSaga = function* () {
  yield takeEvery('LOGIN', loginSaga);
};
const serializedUserState = sessionStorage.getItem('user');
const initialState = serializedUserState ? JSON.parse(serializedUserState) : {};

/* eslint-disable */
const userReducer = (state: AuthState = initialState, action: loginAction | loginSuccessAction | likeAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        if ('userData' in action) {
          draft.isAuthenticated = true;
          draft.user = action.userData;
        }
        break;
      case 'LOGIN_FAILED':
        throw new Error('로그인에 실패하였습니다.');
        break;
      case 'LOGOUT':
        localStorage.removeItem('cart');
        sessionStorage.removeItem('user');
        draft.isAuthenticated = false;
        draft.user = null;
        break;
      case 'ADD_LIKE':
        if ('payload' in action) {
          draft.like.push(action.payload);
        }
        break;
      case 'DELETE_LIKE':
        if ('payload' in action) {
          const targetIdx = draft.like.indexOf(action.payload);
          if (targetIdx > -1) draft.like.splice(targetIdx, 1);
        }
        break;
      default:
        return draft;
    }
  });
};

export default userReducer;
