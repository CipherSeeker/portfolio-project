import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export const LogoLink = styled(Link)`
  text-decoration: none;
  padding: 25px 0;
  color: #ffffff;

  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 250ms ease-in-out;
`;

export const LogoIcon = styled(BsGithub)`
  width: 50px;
  height: 50px;
  
`;

export const LogoBlok = styled.div`
  width: 275px;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
