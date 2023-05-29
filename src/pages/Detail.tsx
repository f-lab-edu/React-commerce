import React, { Suspense } from 'react';
import DetailLayout from '@components/detail/DetailLayout';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import Spinner from '@components/common/atom/Spinner';
import ErrorFallback from '@components/common/organism/ErrorFallback';

const Detail = () => {
  return (
    <S.Detail>
      <ErrorBoundary fallback={<ErrorFallback title="요청실패" />}>
        <Suspense fallback={<Spinner />}>
          <DetailLayout />
        </Suspense>
      </ErrorBoundary>
    </S.Detail>
  );
};

export default Detail;

const S = {
  Detail: styled.div`
    width: 1280px;
    margin: 0 auto;
  `,
};
