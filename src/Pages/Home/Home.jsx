import * as css from "./Home.styled";
import developerImg from "../../assets/developer-dark.3f07bd13.svg";
import projects from "../../bd/bd";
import List from "../../components/List/List";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";


const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <css.Full>
        <css.Left>
          <css.Title>Hi, I am CipherSeeker</css.Title>
          <css.Span>A Full-Stack Developer & Design Enthusiast</css.Span>
        </css.Left>
        <css.Right>
          <img src={developerImg} alt="Developer" />
        </css.Right>
      </css.Full>

      <css.H1>Projects portfolio</css.H1>

      {showLoader ? (
        <css.DivSpinner>
          <Triangle
            height="80"
            width="80"
            color="#ffffff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </css.DivSpinner>
      ) : (
        <css.Ul>
          <List data={projects.slice(0, 4)} />
        </css.Ul>
      )}

      <Link to={"/projects"}>
        <css.ButtonDiv>
          <css.Button type="button">More Projects</css.Button>
        </css.ButtonDiv>
      </Link>

     
    </>
  );
};

export default Home;
