import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { ColorSet } from 'src/utils/constant';

const AddressForm = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [zoneCode, setZoneCode] = useState();
  const [address, setAddress] = useState<string>();
  const [detailAddress, setDetailAddress] = useState<string>();
  const [select, setSelect] = useState<string>();
  const [request, setRequest] = useState<string>();
  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    setZoneCode(data.zonecode);
    let extraAddress = '';
    let fullAddress = data.address;
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      setAddress(fullAddress);
    }
  };

  return (
    <S.Wrap>
      <S.Title isShow={isShow} onClick={() => setIsShow((prev) => !prev)}>
        배송지 정보
      </S.Title>
      {isShow && (
        <div>
          <S.Input
            type="text"
            placeholder="주문자 성명을 입력해주세요"
            size={40}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <S.Input type="text" placeholder="휴대전화 번호를 -를 포함해 입력해주세요" size={40} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <br />
          <div>
            <S.Input type="text" placeholder="우편번호" value={zoneCode} />
            <S.Input type="button" onClick={() => open({ onComplete: handleComplete })} value="우편번호 찾기" />
          </div>
          <S.Input type="text" placeholder="주소" value={address} size={40} />
          <S.Input
            type="text"
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => {
              setDetailAddress(e.target.value);
            }}
          />
          <br />
          <S.Select
            onChange={(e) => {
              setRequest(e.target.value);
              setSelect(e.target.value);
            }}
          >
            <option selected disabled>
              배송 요청사항을 선택해주세요
            </option>
            <option>배송전 연락바랍니다.</option>
            <option>부재시 경비실에 맡겨주세요.</option>
            <option>부재시 연락주세요.</option>
            <option value="">직접입력</option>
          </S.Select>
          <br />
          <S.TextArea maxLength={50} placeholder="배송시 요청사항을 입력해주세요(최대 50자)" value={request} onChange={(e) => setRequest(e.target.value)} />
        </div>
      )}
    </S.Wrap>
  );
};

export default AddressForm;

const S = {
  Wrap: styled.div`
    padding: 10px;
    border-bottom: 1px solid ${ColorSet.borderGray};
    margin-bottom: 5px;
    background-color: white;
  `,
  Title: styled.div<{ isShow: boolean }>`
    position: relative;
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    &::after {
      display: inline-block;
      position: absolute;
      font-weight: 400;
      font-size: 14px;
      right: 10px;
      content: '>';
      transform: ${(props) => (props.isShow ? 'rotate(-90deg)' : 'rotate(90deg)')};
    }
  `,
  Input: styled.input`
    line-height: 20px;
    margin: 0 5px 5px 0;
    padding: 5px;
  `,
  Select: styled.select`
    width: 780px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 5px;
  `,
  TextArea: styled.textarea`
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    width: 780px;
    height: 70px;
  `,
};
