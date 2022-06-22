import React from 'react';
import { TodoContext } from './todoContext';
import { TodoContextProvider } from './todoProvider';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
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
          </a>
        </header>
      </TodoContextProvider>
    </div>
  );
};

export default App;
