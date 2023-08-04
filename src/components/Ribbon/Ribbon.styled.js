import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;
  z-index: 9000;
`;

export const LinkGit = styled(Link)`
  position: absolute;
  display: block;
  width: 220%;
  left: -35%;
  top: -20%;
  z-index: 901;
  cursor: pointer;
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
    background-color: #4f46e5;
    color: #ffffff;
  }
`;
