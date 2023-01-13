import "./nav.css"

export default function Nav() {
  const scrollTrigger = 60;

  function toggleInvertedClass() {
    const nav = document.getElementById("nav");
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      nav.classList.add('inverted');
    } else {
      nav.classList.remove('inverted');
    }
  }

  window.addEventListener('scroll', toggleInvertedClass);

  function handleDownload() {
    const a = document.createElement('a');
    a.href = '/public/portfolio_resume.pdf';
    a.download = 'portfolio_resume.pdf';
    a.click();
  }

  return (
<nav className="sticky-top" id="nav">
      <div className="navLinks">
        <a href="#aboutMe" className="link">
          ABOUT
        </a>
        <a href="#projects" className="link">
          PROJECTS
        </a>
        <a href="#contactMe" className="link">
          SKILLS
        </a>
        <a href="#contactMe" className="link">
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