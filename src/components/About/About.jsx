import { StyledDiv, StyledH2 } from "./About.styled";

const About = ({about}) => {
  return (
    <>
      <StyledDiv>
        <StyledH2>About This Project</StyledH2>
        {about}
      </StyledDiv>
    </>
  );
};

export default About;
