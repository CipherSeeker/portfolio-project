import styled from 'styled-components';
import { BsClock, BsTag, } from 'react-icons/bs';

export const StyledDiv = styled.div`
    text-align: left;
    margin-bottom: 60px;
    & h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        margin-top: 5rem;
    }
`

export const StyledDateTag = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 20px;
`

export const StyledBsClock = styled(BsClock)`
    margin-right: 10px;
    width: 18px;
    height: 18px;
`

export const StyledBsTag = styled(BsTag)`
    margin-right: 8px;
    width: 18px;
    height: 18px;
`

export const StyledP = styled.p`
    display: flex;
    align-items: center;
`

export const StyledSwiper = styled.div`
    width: 600px;
  height: 300px;
`

export const StyledGrid = styled.div`
    display: flex;
    
   
`