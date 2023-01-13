import "./intro.css";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Intro() {
  return (
    <div className="introContainer">
      <div className="introTitle">Hello World, I'm</div>
      <div className="introName">Ashraf Mustafa</div>

      <div className="heroInfo">
        <span className="subHeading">
          A full stack developer with a knack for problem solving and creating useful web apps.
        </span>
        <div className="icons">
          <a href="https://github.com/ammustafa1" className="icon" target="_blank">
            <SiGithub />
          </a>

          <a href="https://www.linkedin.com/in/ashraf-mustafa-167b46179" className="heroIcon" target="_blank">
            <SiLinkedin />
            </a>

        </div>
      </div>
    </div>
  );
}