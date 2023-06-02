import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/reducers';

const StyledProductBoxLike = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: rgba(24, 32, 55, 0.7);
  font-size: 24px;
`;
function ProductBoxLike({ productId }: { productId: string }) {
  const dispatch = useDispatch();
  const { isAuthenticated, like } = useSelector((state: RootState) => ({ isAuthenticated: state.user.isAuthenticated, like: state.user.like }));

  if (!isAuthenticated) {
    return (
      <StyledProductBoxLike
        // eslint-disable-next-line
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
        }}
      >
        ♡
      </StyledProductBoxLike>
    );
  }
  return (
    <StyledProductBoxLike onClick={() => (like.includes(productId) ? dispatch({ type: 'DELETE_LIKE', payload: productId }) : dispatch({ type: 'ADD_LIKE', payload: productId }))}>
      {like.includes(productId) ? '❤️' : '♡'}
    </StyledProductBoxLike>
  );
}

export default ProductBoxLike;
