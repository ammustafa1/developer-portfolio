import "./skills.css"

import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

export default function Skills() {
    return (
      <div className="aboutMe container" id="aboutMe">
        <div className="sectionLabel">
          <span>Skills</span>
        </div>
        <div className="row">
          <div className="skills col">
  
            <div>
              <SiHtml5 className="Icon" />
              <p>HTML</p>
            </div>
            <div>
              <SiCss3 className="Icon" />
              <p>CSS</p>
            </div>

            <div>
              <SiJavascript className="Icon" />
              <p>Javascript</p>
            </div>

            <div>
              <SiMongodb className="Icon" />
              <p>MongoDB</p>
            </div>

            <div>
              <SiExpress className="Icon" />
              <p>Express JS</p>
            </div>

            <div>
              <SiReact className="Icon" />
              <p>React JS</p>
            </div>

            <div>
              <SiNodedotjs className="Icon" />
              <p>Node JS</p>
            </div>

            <div>
              <SiMysql className="Icon" />
              <p>MySQL</p>
            </div>

            <div>
              <SiTailwindcss className="Icon" />
              <p>Tailwind</p>
            </div>

            <div>
              <SiGraphql className="Icon" />
              <p>GraphQL</p>
            </div>

          </div>
        </div>
      </div>
    );
  }