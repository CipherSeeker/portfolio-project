import styled from "styled-components";
import { Triangle } from "react-loader-spinner";

export const Nav = styled.nav`
  margin-bottom: 5px;
  height: 112px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledTriangle = styled(Triangle)`
  color: "#ffffff";
  height: 80px;
  width: 80px;
`;
