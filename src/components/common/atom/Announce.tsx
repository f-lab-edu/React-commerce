import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ColorSet } from 'src/utils/constant';
import styled, { keyframes } from 'styled-components';

interface Props {
  content: string;
  controller: React.Dispatch<React.SetStateAction<boolean>>;
  link?: string;
}
const Announce = ({ content, link, controller }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      controller(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrap>
      {content} {link && <S.link to={link}>바로가기</S.link>}
    </S.Wrap>
  );
};

export default Announce;

const modalDown = keyframes`
from{
    opacity:1;
  transform: translateY(0);
}to{
  opacity:0;
  transform: translateY(200px);
}
`;
const S = {
  Wrap: styled.div`
    position: fixed;
    width: 800px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 20px;
    bottom: 100px;
    display: flex;
    background-color: ${ColorSet.backgroundBlack};
    border-radius: 5px;
    color: white;
    animation: ${modalDown} 1s 2s;
    animation-fill-mode: forwards;
  `,
  link: styled(Link)`
    text-decoration: none;
    position: absolute;
    right: 40px;
    color: ${ColorSet.backgroundYellow};
  `,
};
