import { put, takeEvery, call } from 'redux-saga/effects';
import { TokenResponse, getToken, getUserData } from 'src/api/kakaoLogin';

export const login = (code: string) => ({ type: 'LOGIN', code });
export const logout = () => ({ type: 'LOGOUT' });

interface User {
  nickname: string;
  profile_image: string;
  thumbnail_image: string;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
interface loginAction {
  type: string;
  code: string;
}
interface loginSuccessAction {
  type: string;
  userData: User;
}

export const loginSaga = function* (action: loginAction): any {
  const { code } = action;
  try {
    const token: TokenResponse = yield call(getToken, code);
    const userInfo = yield call(getUserData, token);
    yield put({
      type: 'LOGIN_SUCCESS',
      userData: userInfo.properties,
    });
  } catch (e) {
    yield put({
      type: 'LOGIN_FAILED',
    });
  }
};

export const userSaga = function* () {
  yield takeEvery('LOGIN', loginSaga);
};

const initialState = {
  isAuthenticated: false,
  user: null,
};

// eslint-disable-next-line
const userReducer = (state: AuthState = initialState, action: loginAction & loginSuccessAction) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      if ('userData' in action) {
        return { ...state, isAuthenticated: true, user: action.userData };
      }
    case 'LOGIN_FAILED':
      return { ...state };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return { ...state };
  }
};

export default userReducer;
