import "./App.css";
import * as css from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Triangle } from "react-loader-spinner";
import FormHead from "./components/FormHead/FormHead";


const NavMenu = lazy(() => import("./components/NavMenu/NavMenu"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Ribbon = lazy(() => import("./components/Ribbon/Ribbon"));
const Footer = lazy(() => import("./components/Footer/Footer"));

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
        
         <NavMenu />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:title" element={<Projects />} />
        </Routes>
        <Ribbon />
        <Footer />

        <FormHead/>
      </Suspense>
    </>
  );
}

export default App;
