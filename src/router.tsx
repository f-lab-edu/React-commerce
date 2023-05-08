import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/Main';
import Search from '@pages/Search';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      { path: 'search', element: <Search /> },
    ],
  },
]);

export default router;
