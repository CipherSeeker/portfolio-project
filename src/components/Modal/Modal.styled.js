import styled from "styled-components";

export const StyledDivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDivContent = styled.div`
 background-color: #0D2438;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const StyledBtnClose = styled.button`
 /* position: absolute; */
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;