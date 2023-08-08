import styled from "styled-components";
import { TbBrandHtml5, TbBrandTailwind } from "react-icons/tb";
import { FaReact, FaCss3, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skillIcons = {
  "Next.JS": TbBrandHtml5,
  React: FaReact,
  HTML: TbBrandHtml5,
  CSS: FaCss3,
  JavaScript: IoLogoJavascript,
  "Styled Components": SiStyledcomponents,
  Vite: SiVite,
  Tailwind: TbBrandTailwind,
  "Next.JS": TbBrandNextjs,
  "WordPress": FaWordpressSimple,
  "PHP": FaPhp,
};

const StyledIcons = {};
for (const [skill, Icon] of Object.entries(skillIcons)) {
  StyledIcons[`${skill}Icon`] = styled(Icon)`
    width: 40px;
    height: 40px;
  `;
}

export default StyledIcons;