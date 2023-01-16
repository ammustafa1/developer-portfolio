import "./skills.css"

import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";

export default function Skills() {
    return (
      <div >
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          <div>
  
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
              <p>Express.JS</p>
            </div>

            <div>
              <SiReact className="Icon" />
              <p>React</p>
            </div>

            <div>
              <SiNodedotjs className="Icon" />
              <p>Node JS</p>
            </div>

          </div>
        </div>
      </div>
    );
  }