import SocialShare from "../Social/SocialShare";
import Tools from "../Tools/Tools";
import PropTypes from "prop-types";
import { StyledDiv } from "./SideBar.styled";

const SideBar = ({ skills }) => {
  return (
    <>
      <StyledDiv>
        <Tools skills={skills}/>
        <SocialShare />
      </StyledDiv>
    </>
  );
};

SideBar.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideBar;
