import React, { useState } from 'react';
import styled from 'styled-components';
import payIcon from '@assets/kakaoPayIcon.png';
import { ColorSet } from 'src/utils/constant';

const Purchase = ({ setTool }: { setTool: React.Dispatch<React.SetStateAction<string>> }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <S.Wrap>
      <S.Kakao>
        <S.ImgWrap>
          <img src={payIcon} alt="kakaoPayIcon" width={97} height={40} />
        </S.ImgWrap>
        <label htmlFor="kakaoPay">카카오 페이 결제하기</label>
        <S.kakaoInput type="radio" name="select" value="kakao" id="kakaoPay" defaultChecked onChange={(e) => setTool(e.target.value)} />
      </S.Kakao>
      <S.Others isShow={isShow} onClick={() => setIsShow((prev) => !prev)}>
        기타 결제
      </S.Others>
      {isShow && (
        <S.OtherWrap>
          <S.Other>
            <S.label htmlFor="card">
              <S.CardIcon />
              카드 결제
            </S.label>
            <S.Input type="radio" content="카드 결제" name="select" value="카드" id="card" onChange={(e) => setTool(e.target.value)} />
          </S.Other>
          <S.Other>
            <S.label htmlFor="cellphone">
              <S.CellPhoneIcon />
              휴대폰 결제
            </S.label>
            <S.Input type="radio" content="휴대폰 결제" name="select" value="휴대폰" id="cellphone" onChange={(e) => setTool(e.target.value)} />
          </S.Other>
        </S.OtherWrap>
      )}
    </S.Wrap>
  );
};

export default Purchase;

const S = {
  Wrap: styled.div`
    margin-top: 20px;
    background-color: white;
  `,
  Kakao: styled.div`
    display: flex;
    padding: 10px 15px 10px 10px;
    align-items: center;
    justify-content: space-between;
    background-color: ${ColorSet.backgroundYellow};
    border-radius: 5px;
  `,
  ImgWrap: styled.div`
    flex: 1;
  `,
  Others: styled.div<{ isShow: boolean }>`
    padding: 10px;
    font-weight: 600;
    position: relative;
    line-height: 30px;
    &:after {
      content: '>';
      right: 20px;
      font-size: 14px;
      font-weight: 400;
      position: absolute;
      display: inline-block;
      transform: ${(props) => (props.isShow ? 'rotate(-90deg)' : 'rotate(90deg)')};
    }
  `,
  kakaoInput: styled.input`
    appearance: none;
    position: relative;
    border: 1px solid ${ColorSet.borderGray};
    margin: 0 0 0 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${ColorSet.borderGray};
    }
    &:checked {
      border: 1px solid black;
    }
    &:checked::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: black;
    }
  `,
  label: styled.label`
    display: flex;
    align-items: center;
  `,
  Input: styled.input<{ content: string }>`
    position: relative;
    appearance: none;
    border-radius: 50%;
    background-color: ${ColorSet.textGray};
    width: 20px;
    height: 20px;
    margin: 0 0 0 5px;
    cursor: pointer;
    &:after {
      content: 'L';
      transform: rotateY(180deg) rotate(-45deg);
      color: white;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 8px;
      position: absolute;
    }
    &:checked {
      background-color: ${ColorSet.backgroundYellow};
    }
  `,
  OtherWrap: styled.div`
    padding: 10px;
  `,
  Other: styled.div`
    display: flex;
    padding: 10px;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid ${ColorSet.borderGray};
    justify-content: space-between;
    align-items: center;
  `,
  CardIcon: styled.span`
    display: inline-block;
    margin-right: 20px;
    width: 20px;
    height: 16px;
    background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230515/155501/ico_splatform_220701.378fb16b4b2490e1.png') no-repeat;
    background-position: -45px 0;
    background-size: 70px 65px;
  `,
  CellPhoneIcon: styled.span`
    display: inline-block;
    margin-right: 20px;
    width: 20px;
    height: 23px;
    background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230515/155501/ico_splatform_220701.378fb16b4b2490e1.png') no-repeat;
    background-position: 0 -20px;
    background-size: 70px 65px;
  `,
};
