import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userReducer, { userSaga } from './login';

const rootReducer = combineReducers({ user: userReducer });

export function* rootSaga() {
  yield all([userSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
