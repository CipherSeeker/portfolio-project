import styled from "styled-components";

export const Full = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 33%;
`;

export const Right = styled.div`
  width: 66%;
`;

export const Title = styled.span`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 25px;
`;
export const Span = styled.span`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  color: #ffffff;
  padding-right: 60px;
`;


export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  justify-content: center;
  margin-top: 15px;

  /* animation: showOutline 2s ease-in-out 1 forwards; */

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
  border-bottom: 1px solid rgb(16 45 68 / 1);
  padding: 40px;
  margin: 45px 0 30px;
`;


export const Button = styled.button`
  background-color: #6366f1;
  color: #1a1a1a;
  font-weight: 600;

  &:hover {
    background-color: #4f46e5;
    color: #ffffff;
  }
`;

export const ButtonDiv = styled.div`
  text-align: center;
  padding: 40px;
`;