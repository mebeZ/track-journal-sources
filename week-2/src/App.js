import './App.css';
import NavBar from './components/NavBar.jsx';
import CreateSource from './components/CreateSource.jsx'
import Source from './components/Source.jsx'

function App() {
  return (
    <div className="App">
      <head>
        <title>Spec Sources</title>
      </head>
      <body>
        <NavBar/>
        <CreateSource/>
        <Source num="1." name="Presbo" email="presbo@columbia.edu"/>
        <Source num="2." name="John Jay Mouse" email="mouse@columbia.edu"/>
        <Source num="3." name="Water Bottle Man" email="flipper@columbia.edu"/>
      </body>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br></br>Hello World
        </a>
      </header>
    </div>
    */
  );
  
}

export default App;
