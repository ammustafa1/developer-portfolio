import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus at enim at ligula scelerisque elementum.
          Nunc interdum semper diam, a luctus lectus placerat id.
          Nulla ut ex at mauris ornare sollicitudin. Proin ac dictum erat.
        </p>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
        <h2>Contact</h2>
        <p>
          Email: example@email.com
          <br />
          Phone: 555-555-5555
        </p>
      </main>
    </div>
  );
}

export default App;
