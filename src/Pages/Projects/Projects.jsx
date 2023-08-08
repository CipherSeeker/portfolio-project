import { useParams } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import About from "../../components/About/About";
import SideBar from "../../components/Sidebar/SideBar";
import SwiperProject from "../../components/Swiper/Swiper";
import projects from "../../bd/bd";
import { StyledDiv, StyledGrid } from "./Projects.styled";

const Projects = () => {
  const { title } = useParams();

  const project = projects.find((project) => project.title === title);

  return (
    <>
      <StyledDiv>
        <h2>{project.title}</h2>
        <Buttons url={project.url} urlgit={project.urlgit}/>
      </StyledDiv>
      <SwiperProject images={project.images} />
      <StyledGrid>
        <SideBar skills={project.skill} />
        <About about={project.about}/>
      </StyledGrid>
    </>
  );
};

export default Projects;
