import styled, { css } from "styled-components";

export const Img = styled.img`
  width: 625px;
  height: 100%;

  position: relative;
  z-index: 1;
`;

export const DivBlock = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  &.odd {
    transform: translateX(100%);
  }

  &.even {
    transform: translateX(-100%);
  }
`;
export const Button = styled.button`
  scale: 0;
  transition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Li = styled.li`
  position: relative;
  width: 624px;
  height: auto;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 2;
  }

  &:hover ${DivBlock}, &:focus ${DivBlock} {
    transform: translateX(0);
  }

  &:hover ${Button}, &:focus ${Button} {
    scale: 1;
  }

  ${(props) =>
    props["data-animation-direction"] === "left" &&
    css`
      transform: translateX(-100%);
      animation: slide-in-left 0.8s ease-out forwards;
    `}

  ${(props) =>
    props["data-animation-direction"] === "right" &&
    css`
      transform: translateX(100%);
      animation: slide-in-right 0.8s ease-out forwards;
    `}


   
  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  font-size: 20px;
  color: #fff;
`;

export const DivBlockButton = styled.div`
  color: #fff;
  width: 90px;
  height: 90px;
`;

export const Em = styled.em`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 75px;
  height: 100px;
  z-index: 9000;
`;

export const SpanEm = styled.span`
  position: absolute;
  display: block;
  width: 220%;
  left: -10%;
  top: -35%;
  z-index: 901;
  cursor: pointer;
  /* background-color: #026ccf; */
  background-color: #6366f1;
  color: #1a1a1a;
  font-size: 13px;
  padding: 0;
  line-height: inherit;
  text-decoration: none;
  font-weight: 700;
  box-shadow: -2px 3px 1px rgba(0, 0, 0, 0.23);
  opacity: 1;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0) rotate(45deg);
  transform-origin: 0 0;
  height: 44px;
  line-height: 47px;
  transition: background-color 0.2s ease-out 0s,
    transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 1s, opacity 0.2s ease-out 1s;

  &:hover {
    /* background-color: #0055a5; */
    background-color: #4f46e5;
    color: #ffffff;
  }
`;
