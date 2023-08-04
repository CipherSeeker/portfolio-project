import styled from "styled-components";
import { BsClock, BsTag } from "react-icons/bs";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding-top: 40px;
  padding-bottom: 40px;

  border-top: 1px solid #d6d1d1;
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;

  & h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const StyledDateTag = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 20px;
`;

export const StyledP = styled.p`
  display: flex;
  align-items: center;
`;

export const StyledSwiper = styled.div`
  width: 600px;
  height: 300px;
`;

export const StyledGrid = styled.div`
  display: flex;
`;
