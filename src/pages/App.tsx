import React from 'react';
import logo from '../logo.svg';
import './App.css';
import styled from 'styled-components'

const DIV = styled.p`
  text-align: center;
  color: red
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DIV>
          Edit <code>src/App.tsx</code> and save to reload.
        </DIV>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
