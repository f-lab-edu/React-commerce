import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { ColorSet } from 'src/utils/constant';

interface FormValue {
  name: string;
  phoneNumber: string;
  zoneCode: string;
  address: string;
  detailAddress: string;
  deliveryRequest: string;
}
const AddressForm = ({ payHandler }: { payHandler: Function }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValue>();

  const open = useDaumPostcodePopup();

  const handleDaumPostComplete = (data: any) => {
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
      setValue('zoneCode', data.zonecode);
      setValue('address', fullAddress);
      trigger(['zoneCode', 'address']);
    }
  };

  return (
    <S.Wrap onSubmit={handleSubmit(() => payHandler())} id="addressForm">
      <S.Title isShow={isShow} onClick={() => setIsShow((prev) => !prev)}>
        배송지 정보
      </S.Title>
      {isShow && (
        <>
          <S.Input {...register('name', { required: '주문자 성명을 입력은 필수입니다' })} type="text" placeholder="주문자 성명을 입력해주세요" size={40} />
          {errors.name && <S.Error>{errors.name.message}</S.Error>}
          <br />
          <S.Input
            {...register('phoneNumber', {
              required: '휴대전화 번호 입력은 필수입니다',
              pattern: { value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/g, message: '휴대전화 번호 형식에 맞지 않습니다.' },
            })}
            type="text"
            placeholder="휴대전화 번호를 -를 포함해 입력해주세요"
            size={40}
          />
          {errors.phoneNumber && <S.Error>{errors.phoneNumber.message}</S.Error>}
          <br />
          <div>
            <S.Input {...register('zoneCode', { required: true })} type="text" placeholder="우편번호" />
            <S.Btn onClick={() => open({ onComplete: handleDaumPostComplete })}>우편번호 찾기</S.Btn>
            {(errors.address || errors.zoneCode) && <S.Error>주소 입력은 필수입니다</S.Error>}
          </div>
          <S.Input {...register('address', { required: true })} type="text" placeholder="주소" size={40} />
          <S.Input {...register('detailAddress')} type="text" placeholder="상세주소" />
          <br />
          <S.Select
            onChange={(e) => {
              setValue('deliveryRequest', e.target.value);
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
          <S.TextArea {...register('deliveryRequest')} maxLength={50} placeholder="배송시 요청사항을 입력해주세요(최대 50자)" />
        </>
      )}
    </S.Wrap>
  );
};

export default AddressForm;

const S = {
  Wrap: styled.form`
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
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 5px;
    line-height: 20px;
    margin: 0 5px 5px 0;
    padding: 5px;
  `,
  Btn: styled.button`
    cursor: pointer;
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 5px;
    line-height: 20px;
    margin: 0 5px 5px 0;
    padding: 5px;
  `,
  Select: styled.select`
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 5px;
    width: 780px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
      no-repeat;
    background-position: 99% 50%;
  `,
  TextArea: styled.textarea`
    border: 1px solid ${ColorSet.borderGray};
    border-radius: 5px;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    width: 780px;
    height: 70px;
  `,
  Error: styled.small`
    color: ${ColorSet.textRed};
    font-size: 12px;
  `,
};
