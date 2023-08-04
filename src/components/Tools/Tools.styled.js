import styled from "styled-components";
import { TbBrandHtml5, TbBrandTailwind } from "react-icons/tb";
import { FaReact, FaCss3, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Styledh2 = styled.h2`
  text-align: initial;
  font-size: 1.5rem;
    line-height: 2rem;
`;

export const StyledDivIcons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 265px;
  margin-bottom: 60px;
`;

export const StyledDivIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80px;
  height: 80px;
  background-color: #1e3851;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;
  &:hover {
    transform: scale(1.2); 
    color: #646cff;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const StyledTbBrandHtml5 = styled(TbBrandHtml5)`
  width: 60px;
  height: 60px;
`;

export const StyledFaReact = styled(FaReact)`
  width: 60px;
  height: 60px;
`;

export const StyledFaCss3 = styled(FaCss3)`
  width: 60px;
  height: 60px;
`;

export const StyledIoLogoJavascript = styled(IoLogoJavascript)`
  width: 60px;
  height: 60px;
`;

export const StyledSiStyledcomponents = styled(SiStyledcomponents)`
  width: 60px;
  height: 60px;
`;

export const StyledSiVite = styled(SiVite)`
  width: 60px;
  height: 60px;
`;

export const StyledTbBrandTailwind = styled(TbBrandTailwind)`
  width: 60px;
  height: 60px;
`;

export const StyledFaWordpressSimple = styled(FaWordpressSimple)`
  width: 60px;
  height: 60px;
`;

export const StyledTFaPhp = styled(FaPhp)`
  width: 60px;
  height: 60px;
`;

export const StyledTbBrandNextjs = styled(TbBrandNextjs)`
  width: 60px;
  height: 60px;
`;
