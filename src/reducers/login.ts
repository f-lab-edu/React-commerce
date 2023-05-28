import { put, takeEvery, call } from 'redux-saga/effects';
import { TokenResponse, getToken, getUserData } from 'src/api/kakaoLogin';

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
    sessionStorage.setItem('user', JSON.stringify({ isAuthenticated: true, user: userInfo.properties, like: [] }));
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

// eslint-disable-next-line
const userReducer = (state: AuthState = initialState, action: loginAction & loginSuccessAction & likeAction) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      if ('userData' in action) {
        return { ...state, isAuthenticated: true, user: action.userData };
      }
    case 'LOGIN_FAILED':
      return { ...state };
    case 'LOGOUT':
      sessionStorage.removeItem('user');
      return { ...state, isAuthenticated: false, user: null };
    case 'ADD_LIKE':
      if ('payload' in action) {
        return { ...state, like: [...state.like, action.payload] };
      }
    case 'DELETE_LIKE':
      if ('payload' in action) {
        const targetIdx = state.like.indexOf(action.payload);
        if (targetIdx > -1) state.like.splice(targetIdx, 1);
        return { ...state, like: [...state.like] };
      }
    default:
      return { ...state };
  }
};

export default userReducer;
