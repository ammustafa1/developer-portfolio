import "./projects.css"

export default function Projects() {
  return (
    <div className="container" id="projects">
      <div className="sectionLabel">
        <span>Projects</span>
      </div>

      <ul className="card-wrapper">
        <li className="card">
          <img className="card-img" src='https://www.linkpicture.com/q/CountryCard.png' alt='' />
          <h3>
            <a href="https://ammustafa1.github.io/country-cards/">Country Cards</a>
          </h3>
        </li>

        <li className="card">
          <img className="card-img" src="https://www.linkpicture.com/q/Flashaholic.png"></img>
          <h3>
            <a href="https://shielded-sea-30882.herokuapp.com/">Flashaholic</a>
          </h3>
        </li>


        <li className="card">
          <img className="card-img" src='#'/>
          <h3>
            <a href="">Project 3</a>
          </h3> 
        </li>

      </ul>
    </div>
  );
}