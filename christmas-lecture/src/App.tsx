import './App.css';
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
    </div>
  );
}

export default App;
