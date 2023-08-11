import {
  StyledArrow,
  StyledDiv,
  StyledDivCon,
  StyledGit,
  StyledLinkGit,
  StyledLinkWeb,
} from "./Buttons.styled";
import PropTypes from 'prop-types';

const Buttons = ({url, urlgit}) => {
  return (
    <>
      <StyledDiv>
        <StyledDivCon>
          <StyledLinkWeb href={`${url}`} target="_blank">
            <StyledArrow />
            VISIT THE WEBSITE
          </StyledLinkWeb>
        </StyledDivCon>
        <StyledDivCon>
          <StyledLinkGit href={`${urlgit}`} target="_blank">
            <StyledGit />
            GitHub
          </StyledLinkGit>
        </StyledDivCon>
      </StyledDiv>
    </>
  );
};

Buttons.propTypes = {
  url: PropTypes.string.isRequired,
  urlgit: PropTypes.string.isRequired,
};

export default Buttons;
