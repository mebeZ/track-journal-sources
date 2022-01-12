import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar.jsx';
import CreateSource from './components/CreateSource.jsx'
import Source from './components/Source.jsx'

function App() {

  const specSources = [
    {
      num: 1,
      name: 'Presbo',
      email: 'presbo@columbia.edu',
    },
    {
      num: 2,
      name: 'John Jay Mouse',
      email: 'mouse@columbia.edu',
    },
    {
      num: 3,
      name: 'Water Bottle Man',
      email: 'flipper@columbia.edu',
    },
  ];
  
  const [sources, setSources] = useState(specSources);

  const deleteSource = (num) => {
    let sourceId = num; 
    console.log(sourceId);
    let newSources = sources.filter(source => source.num !== sourceId); // only keep sources that do not match the id
    setSources(newSources); // set the new sources
    //console.log({sources});
  }

  const captureData = (name, email) => {
    //console.log(`Name field: ${name}; Email field: ${email}`);
    const newSource = {
      num: specSources.length + 1, 
      name: name,
      email: email, 
    }
    setSources([...sources, newSource]);
    //console.log(JSON.stringify(newSource));
  }

  return (
    <div className="App">
      <head>
        <title>Spec Sources</title>
      </head>
      <body>
        <NavBar/>
        <CreateSource captureData={captureData}/>
        {sources.map(source => {
          return <Source num={source.num} name={source.name} email={source.email} deleteSource={deleteSource}/>
        })}
        {/*
        <Source num="1." name="Presbo" email="presbo@columbia.edu"/>
        <Source num="2." name="John Jay Mouse" email="mouse@columbia.edu"/>
        <Source num="3." name="Water Bottle Man" email="flipper@columbia.edu"/>
        */}
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
