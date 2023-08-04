import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export const LinksHeader = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 25px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  padding: 25px 0;
  color: #ffffff;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonHire = styled.button`
  background-color: #6366f1;
  color: #1a1a1a;
  font-weight: 700;

  &:hover {
    background-color: #4f46e5;
    color: #ffffff;
  }
`;

export const ButtonHireDiv = styled.div`
  width: 275px;
  text-align: right;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const Logo = styled(BsGithub)`
  width: 50px;
  height: 50px;
`;

export const LogoBlok = styled.div`
  width: 275px;
`;
