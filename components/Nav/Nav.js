import "./nav.css"

export default function Nav() {

  return (
<nav>
      <div>
        <a href="#aboutMe">
          ABOUT
        </a>
        <a href="#projects">
          PROJECTS
        </a>
        <a href="#contactMe">
          SKILLS
        </a>
        <a href="#contactMe">
          CONTACT
        </a>
      </div>
      <div>
      <a href="https://docs.google.com/document/d/e/2PACX-1vQF6wyY0QW2-RqpeC7C3rWdP6TCCq5vCebbk0Et3LqbazdwCQ13EENFphdK0E5DvbsMICJQYnIPSL0t/pub">
          <button className="btn" >View Resume</button>
        </a>
      </div>
    </nav>

  );
}