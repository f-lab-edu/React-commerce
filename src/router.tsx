import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Main = lazy(() => import('@pages/Main'));
const Search = lazy(() => import('@pages/Search'));
const Detail = lazy(() => import('@pages/Detail'));
const Cart = lazy(() => import('@pages/Cart'));
const Pay = lazy(() => import('@pages/Pay'));
const PaySuccess = lazy(() => import('@pages/PaySuccess'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback="로딩중..">
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'search',
        element: (
          <Suspense fallback="로딩중..">
            <Search />
          </Suspense>
        ),
      },
      {
        path: 'detail',
        element: (
          <Suspense fallback="로딩중..">
            <Detail />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback="로딩중..">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: 'pay',
        element: (
          <Suspense fallback="로딩중..">
            <Pay />
          </Suspense>
        ),
      },
      {
        path: 'pay_success',
        element: (
          <Suspense fallback="로딩중..">
            <PaySuccess />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
