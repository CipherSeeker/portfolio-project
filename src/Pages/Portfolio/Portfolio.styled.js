import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  justify-content: center;
  margin-top: 15px;

  /* animation: showOutline 2s ease-in-out 1 forwards;  */

  @keyframes showOutline {
    from {
      outline: none;
    }
    to {
      outline: 3px solid #000;
    }
  }
`;

 export const DivSpinner = styled.div`
   margin: 150px auto;
   display: inline-block;
 `;



export const H1 = styled.h1`
  font-size: 33px;
  text-transform: uppercase;

  margin-top: 2.7rem ;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;