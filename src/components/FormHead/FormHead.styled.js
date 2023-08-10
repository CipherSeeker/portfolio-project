import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";


export const Full = styled.div`
 
`;
export const FullHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 25px 0px;
  border-bottom: 1px solid rgba(30, 56, 81, 1);
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 25px 50px;
  gap: 20px;
  font-family: "Montserrat", sans-serif;

  input,
  textarea {
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid rgba(16, 45, 68, 1);
    background: rgba(30, 56, 81, 1);
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 1.3px;
    font-size: 14px;

    &::placeholder {
      color: #918d8d;
      font-weight: 500;
      letter-spacing: 1.75px;
    }
  }
  textarea {
    height: 150px;
  }
`;

export const ButtonForm = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid rgba(16, 45, 68, 1);
  font-weight: 700;
  letter-spacing: 1.3px;
  background-color: #6366f1;
  color: #1a1a1a;
  transition: color 250ms ease-in-out;
  &:hover {
    transition: color 250ms ease-in-out;
    background-color: #4f46e5;
    color: #ffffff;
  }
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
  width: 30px;
  height: 30px;
`;
