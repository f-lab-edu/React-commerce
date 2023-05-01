import React from 'react';
import styled from 'styled-components';

const StyledProductShareModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const StyledModalBox = styled.div`
  background-color: white;
  width: 360px;
  height: 180px;
`;
const StyledModalHeader = styled.div`
  padding-top: 20px;
  text-align: center;
  position: relative;
`;

const StyledModalContent = styled.ul`
  margin: 0;
  padding: 25px 35px 28px;
  display: flex;
  justify-content: space-around;
`;
const ShareIconWrap = styled.li`
  list-style: none;
  font-size: 14px;
  text-align: center;
`;
const KaKaoIcon = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  background: url('https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230425/141920/ico_comm_module.7f73cf8916820fd7.svg')
    0 0 no-repeat;
  background-size: 215px 120px;
  background-position: 0 0;
`;
const UrlIcon = styled(KaKaoIcon)`
  background-position: -60px 0;
`;
const FacebookIcon = styled(KaKaoIcon)`
  background-position: 0 -60px;
`;
const TwitterIcon = styled(KaKaoIcon)`
  background-position: -60px -60px;
`;
const CloseIcon = styled.button`
  position: absolute;
  border: none;
  top: 14px;
  right: 10px;
  width: 24px;
  height: 24px;
  background: url('https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230425/141920/ico_comm_module.7f73cf8916820fd7.svg')
    0 0 no-repeat;
  background-size: 215px 120px;
  background-position: -120px -60px;
`;
function ProductShareModal({ close }: { close: React.Dispatch<React.SetStateAction<Boolean>> }) {
  return (
    <StyledProductShareModal>
      <StyledModalBox
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <StyledModalHeader>
          <strong>공유하기</strong>
          <CloseIcon onClick={(e: React.MouseEvent<HTMLButtonElement>) => close(false)} type="button" />
        </StyledModalHeader>
        <StyledModalContent>
          <ShareIconWrap>
            {/* 클릭시 카카오톡 공유 api */}
            <KaKaoIcon />
            <span>카카오톡</span>
          </ShareIconWrap>
          <ShareIconWrap>
            {/* 클릭시 상품 상세페이지 url clip */}
            <UrlIcon />
            <span>URL 복사</span>
          </ShareIconWrap>
          <ShareIconWrap>
            {/* 클릭시 페이스북 공유 api */}
            <FacebookIcon />
            <span>페이스북</span>
          </ShareIconWrap>
          <ShareIconWrap>
            {/* 클릭시 트위터 공유 api */}
            <TwitterIcon />
            <span>트위터</span>
          </ShareIconWrap>
        </StyledModalContent>
      </StyledModalBox>
    </StyledProductShareModal>
  );
}

export default ProductShareModal;
