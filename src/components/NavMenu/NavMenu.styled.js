import styled from "styled-components";
import { Link } from "react-router-dom";


export const LinksHeader = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 25px;
  color: #ffffff;
  text-transform: uppercase;
  transition: color 250ms ease-in-out;
`;



export const ButtonHire = styled.button`
  background-color: #6366f1;
  color: #1a1a1a;
  font-weight: 700;
  transition: color 250ms ease-in-out;

  &:hover {
    transition: color 250ms ease-in-out;
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




export const Nav = styled.nav`
  margin-bottom: 5px;
  height: 112px;
`;
