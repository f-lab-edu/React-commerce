import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Main = lazy(() => import('@pages/Main'));
const Search = lazy(() => import('@pages/Search'));
const Detail = lazy(() => import('@pages/Detail'));

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
    ],
  },
]);

export default router;
