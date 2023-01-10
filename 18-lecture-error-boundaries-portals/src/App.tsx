import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import Portal from './components/Modal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      {/* პორტალს გაყავს თავისი შვილები გარეთ root div-ს გარეთ */}
      <Portal>
        <h1>Hello World!</h1>
        <h1>Hello From MODAL!</h1>
      </Portal>
    </div>
  );
}

export default App;
