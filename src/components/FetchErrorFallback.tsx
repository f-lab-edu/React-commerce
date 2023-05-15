import React from 'react';

const FetchErrorFallback = () => {
  return (
    <h2>
      네트워크 요청중 오류가 발생하였습니다.
      <br />
      새로고침하거나 잠시후 다시 시도해주세요
    </h2>
  );
};

export default FetchErrorFallback;
