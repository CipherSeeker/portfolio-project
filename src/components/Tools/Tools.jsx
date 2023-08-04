import {
  StyledContainer,
  StyledDivIcons,
  StyledDivIconsContainer,
  StyledFaCss3,
  StyledFaReact,
  StyledIoLogoJavascript,
  StyledSiStyledcomponents,
  StyledSiVite,
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
    { name: "Javascript", icon: StyledIoLogoJavascript },
    { name: "STYLED", icon: StyledSiStyledcomponents },
    { name: "VITE", icon: StyledSiVite },
    { name: "TAILWIND", icon: StyledTbBrandTailwind },
    { name: "Next.JS", icon: StyledTbBrandNextjs },
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
