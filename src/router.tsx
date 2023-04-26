import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

export default router;
