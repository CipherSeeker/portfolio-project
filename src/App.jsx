import "./App.css";
import * as css from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Triangle } from "react-loader-spinner";

const NavMenu = lazy(() => import("./components/NavMenu/NavMenu"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Ribbon = lazy(() => import("./components/Ribbon/Ribbon"));

function App() {
  // const scrollY = window.scrollY;
  // // console.log("scrollY:", scrollY);
  return (
    <>
      <Suspense
        fallback={
          <css.SpinnerContainer>
            <Triangle height="80" width="80" color="#ffffff" />
          </css.SpinnerContainer>
        }
      >
        <css.Nav>
          <NavMenu />
        </css.Nav>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:title" element={<Projects />} />
        </Routes>
        <Ribbon />
      </Suspense>
    </>
  );
}

export default App;
