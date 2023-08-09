import {
  StyledBsFillBoxSeamFill,
  StyledContainer,
  StyledDivIcons,
  StyledDivIconsContainer,
  StyledFaCss3,
  StyledFaReact,
  StyledFaWordpressSimple,
  StyledIoLogoJavascript,
  StyledSiStyledcomponents,
  StyledSiVite,
  StyledTFaPhp,
  StyledTbBrandHtml5,
  StyledTbBrandNextjs,
  StyledTbBrandTailwind,
  Styledh2,
} from "./Tools.styled";
import PropTypes from "prop-types";

const Tools = ({ skills }) => {
  const availableSkills = [
    { name: "HTML", icon: StyledTbBrandHtml5 },
    { name: "React", icon: StyledFaReact },
    { name: "CSS", icon: StyledFaCss3 },
    { name: "JavaScript", icon: StyledIoLogoJavascript },
    { name: "STYLED", icon: StyledSiStyledcomponents },
    { name: "VITE", icon: StyledSiVite },
    { name: "Tailwind", icon: StyledTbBrandTailwind },
    { name: "Next.JS", icon: StyledTbBrandNextjs },
    { name: "WordPress", icon: StyledFaWordpressSimple },
    { name: "PHP", icon: StyledTFaPhp },
    { name: "Parcel", icon: StyledBsFillBoxSeamFill },
  ];

  const projectSkills = availableSkills.filter((skill) =>
    skills.includes(skill.name)
  );

  return (
    <>
      <Styledh2>Tools & Technologies</Styledh2>
      <StyledDivIcons>
        {projectSkills.map((skill) => (
          <StyledContainer key={skill.name}>
            <StyledDivIconsContainer>
              <skill.icon />
            </StyledDivIconsContainer>
            <p>{skill.name}</p>
          </StyledContainer>
        ))}
      </StyledDivIcons>
    </>
  );
};

Tools.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tools;
