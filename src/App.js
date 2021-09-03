import React from "react"
import logo from './logo.svg';
import './App.css';
import Search from './search';
import { CardsGrid } from './CardsGrid';
import { Box } from "./dnd";
import { Bucket } from "./dnd"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
        <DndProvider backend={HTML5Backend}>
          <Bucket >
          </Bucket >
          <Box content="Box 1">
                "Box 1"
            </Box>
        </DndProvider>
      </body>
    </div>
  );
}

export default App;
