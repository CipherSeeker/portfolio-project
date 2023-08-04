import styled from "styled-components";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

export const StyledDiv = styled.div`
  text-align: left;
  margin-bottom: 60px;
`;

export const StyledDivFlex = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
    line-height: 2rem;
`;

export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80px;
  height: 80px;
  background-color: #1e3851;
  border-radius: 8px;
  transform: translateX(0);
  transition: transform 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover {
    transform: translateY(15px);
    background-color: #1e3851;
    color: white;
  }
`;

export const StyledFiFacebook = styled(FiFacebook)`
  width: 60px;
  height: 60px;
`;

export const StyledFiTwitter = styled(FiTwitter)`
  width: 60px;
  height: 60px;
`;

export const StyledFiLinkedin = styled(FiLinkedin)`
  width: 60px;
  height: 60px;
`;
