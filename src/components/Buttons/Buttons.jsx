import {
  StyledArrow,
  StyledDiv,
  StyledDivCon,
  StyledGit,
  StyledLinkGit,
  StyledLinkWeb,
} from "./Buttons.styled";

const Buttons = () => {
  return (
    <>
      <StyledDiv>
        <StyledDivCon>
          <StyledLinkWeb href="https://runersbiome.com/">
            <StyledArrow />
            VISIT THE WEBSITE
          </StyledLinkWeb>
        </StyledDivCon>
        <StyledDivCon>
          <StyledLinkGit href="https://github.com/CipherSeeker">
            <StyledGit />
            GitHub
          </StyledLinkGit>
        </StyledDivCon>
      </StyledDiv>
    </>
  );
};

export default Buttons;
