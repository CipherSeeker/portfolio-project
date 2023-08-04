import styled from "styled-components";
import { BsBoxArrowInRight, BsGithub } from "react-icons/bs";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  gap: 25px;
`;

export const StyledDivCon = styled.div`
  display: flex;
`;

export const StyledLink = styled.a`
  background-color: #6366f1;
  color: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  font-size: 18px;
  transform: translateX(0);
  transition: transform 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    background-color: #4f46e5;
    color: white;
  }
`;

export const StyledLinkWeb = styled(StyledLink)`
  &:hover {
    transform: translateX(15px);
  }
`;

export const StyledLinkGit = styled(StyledLink)`
  &:hover {
    transform: translateX(-15px);
  }
`;

export const StyledArrow = styled(BsBoxArrowInRight)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const StyledGit = styled(BsGithub)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
