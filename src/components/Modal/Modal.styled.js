import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 20px;
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
`;
