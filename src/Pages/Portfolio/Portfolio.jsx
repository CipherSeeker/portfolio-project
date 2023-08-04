import { useEffect, useState } from "react";
import * as css from "./Portfolio.styled";
import List from "../../components/List/List";
import Nav from "../../components/Nav/Nav";
import projects from "../../bd/bd";

import { Triangle } from "react-loader-spinner";

const Portfolio = () => {
  const [skills, setSkills] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setSkills(Array.from(new Set(projects.flatMap(({ skill }) => skill))));
    setFilteredProjects(projects);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const onDataFilter = (element) => {
    setShowLoader(true);

    const filter = projects.filter((item) => item.skill.includes(element));

    const timer = setTimeout(() => {
      setFilteredProjects(filter);
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  };

  const onShowAll = () => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setFilteredProjects(projects);
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(timer);
  };

  return (
    <>
      <Nav data={skills} onFilter={onDataFilter} onShowAll={onShowAll} />

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
          <List data={filteredProjects} />
        </css.Ul>
      )}
    </>
  );
};

export default Portfolio;