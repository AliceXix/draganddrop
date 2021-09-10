import React from "react"
import logo from './logo.svg';
import './App.css';
import Search from './search';
import { CardsGrid } from './CardsGrid';
import { Example } from './Example.tsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Search />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div className="site-card-wrapper">
        </div>
       <Example/>
      </body>
    </div>
  );
}

export default App;
