import { useEffect, useState } from "react";
import * as css from "./List.styled";
import { Link } from "react-router-dom";
import StyledIcons from "../Icon/SkillIcon";

const List = ({ data }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(false);

    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 150);

    return () => clearTimeout(animationTimer);
  }, [data]);

  return data.map(({ id, img, skill, title, cms }, index) => (
    <css.Li
      key={`${id}_${index}`}
      data-animation-direction={index % 2 === 0 ? "left" : "right"}
      style={{
        animationDelay: isAnimated ? `${index * 100}ms` : "0",
        opacity: isAnimated ? 1 : 0,
      }}
    >
      {/* <Link to={`${title}`}> */}
      <Link to={`/projects/${title}`}>
        <css.Img src={img} alt="" />
        <css.DivBlock className={index % 2 === 0 ? "even" : "odd"}>
          <css.H2>{title}</css.H2>
          <css.DivButton>
            {skill.map((item, index) => {
              const Icon = StyledIcons[`${item}Icon`];
              return (
                <css.DivBlockButton key={`${id}_${index}`}>
                  <css.Button type="button">{Icon && <Icon />}</css.Button>
                  <p>{item}</p>
                </css.DivBlockButton>
              );
            })}
          </css.DivButton>
        </css.DivBlock>
      </Link>
      <css.Em>
        <css.SpanEm>{cms}</css.SpanEm>
      </css.Em>
    </css.Li>
  ));
};

export default List;
