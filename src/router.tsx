import React, { lazy, Suspense } from 'react';
import Spinner from '@components/common/atom/Spinner';
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
          <Suspense fallback={<Spinner />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'search',
        element: (
          <Suspense fallback={<Spinner />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: 'detail',
        element: (
          <Suspense fallback={<Spinner />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<Spinner />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: 'pay',
        element: (
          <Suspense fallback={<Spinner />}>
            <Pay />
          </Suspense>
        ),
      },
      {
        path: 'pay_success',
        element: (
          <Suspense fallback={<Spinner />}>
            <PaySuccess />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
