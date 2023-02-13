import "./App.css";
import Nav from "./components/Nav/Nav";
import Intro from './components/Intro/Intro'
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from './components/Skills/Skills';
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
