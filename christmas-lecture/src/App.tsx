import { useState } from 'react';
import './App.css';
import TimerComponent from './components/TimerComponent';
import useCounter from './hooks/useCounter';
import useKeyPress from './hooks/useKeyPress';
import useMount from './hooks/useMount';
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const { count, increment, decrement } = useCounter();
  console.log(count);

  const width = useWindowWidth();
  console.log(width);

  const enterIsPressed = useKeyPress('Enter');
  console.log(enterIsPressed);

  useMount(() => {
    console.log('ეს ეშვება 1x');
  });

  const [timerMounted, setTimerMounted] = useState(false);

  return (
    <div>
      Hello BitCamp!
      {width > 500 ? (
        <button
          onClick={() => {
            increment();
          }}
        >
          increase
        </button>
      ) : null}
      <button
        onClick={() => {
          decrement();
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setTimerMounted((current) => !current);
        }}
      >
        {timerMounted && 'un'}mount
      </button>
      {timerMounted && <TimerComponent />}
    </div>
  );
}

export default App;
