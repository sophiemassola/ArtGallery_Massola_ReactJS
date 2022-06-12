import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenida, Sophie.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Aprende a usar React!
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com/cursos/31220/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h4>Página principal CODER</h4>
        </a>
      </header>
    </div>
  );
}

export default App;
