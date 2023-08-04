import { useParams } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import About from "../../components/About/About";
import SideBar from "../../components/Sidebar/SideBar";
import SwiperProject from "../../components/Swiper/Swiper";
import projects from "../../bd/bd";
import {
  StyledBsClock,
  StyledBsTag,
  StyledDateTag,
  StyledDiv,
  StyledGrid,
  StyledP,
} from "./Projects.styled";

const Projects = () => {
  const { title } = useParams();

  const project = projects.find((project) => project.title === title);

  return (
    <>
      <StyledDiv>
        <h2>{project.title}</h2>
        <StyledDateTag>
          <StyledP>
            <StyledBsClock />
            Jul 26, 2021
          </StyledP>
          <StyledP>
            <StyledBsTag />
            UI / Frontend
          </StyledP>
        </StyledDateTag>
        <Buttons />
      </StyledDiv>
      <SwiperProject images={project.images}/>
      <StyledGrid>
        <SideBar skills={project.skill}/>
        <About />
      </StyledGrid>
    </>
  );
};

export default Projects;
