import * as css from "./Nav.styled";
import _ from "lodash";
import StyledIcons from "../Icon/SkillIcon";
import PropTypes from 'prop-types';
import { useState } from "react";

const Nav = ({ data, onFilter, onShowAll }) => {
  const [currentFilter, setCurrentFilter] = useState(null); // Здесь задайте начальное значение currentFilter, если нужно
  const debouncedOnFilter = _.debounce((item) => {
    if (item !== currentFilter) {
      onFilter(item);
      setCurrentFilter(item);
    }
  }, 200);
  return (
    <css.DivFilter>
      {data.map((item) => {
        const Icon = StyledIcons[`${item}Icon`];
        return (
          <button type="button" key={item} onClick={() => debouncedOnFilter(item)}>
            {Icon && <Icon />}
          </button>
        );
      })}
      <css.NavButton type="button" onClick={onShowAll}>
        Show All
      </css.NavButton>
    </css.DivFilter>
  );
};

Nav.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFilter: PropTypes.func.isRequired,
    onShowAll: PropTypes.func.isRequired,
  };

export default Nav;

