import * as css from "./Hero.styled";
import developerImg from "../../assets/developer-dark.3f07bd13.svg";

const Hero = () => {
  return (
    <css.Full>
      <css.Left>
        <css.H1> HI, CipherSeeker</css.H1>
        <css.H2>A Full-Stack Developer & Design Enthusiast</css.H2>
      </css.Left>
      <css.Right>
        <img src={developerImg} alt="Developer" />
      </css.Right>
    </css.Full>
  );
};

export default Hero;