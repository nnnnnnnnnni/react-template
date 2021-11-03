import logo from '../logo.svg';
import './App.css';
import { BaseBox } from '../components';


function App() {
  return (
    <BaseBox className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.tsx</code> and save to reload.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </BaseBox>
  );
}

export default App;
