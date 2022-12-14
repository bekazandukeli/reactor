import { useCallback, useMemo, useRef, useState } from 'react';
import ChildComponent from './components/ChildComponent';

export default function App() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  const handleSomething = useCallback(() => {}, []);

  //  ამ შემთხვევაში აკეთებს იგივეს რასაც useCallback
  const memoizedValue = useMemo(() => {
    return () => {}
  }, []);



  console.log('Parent Render Count', ++renderCount.current);

  return (
    <div style={styles.container}>

      <ChildComponent handleSomething={handleSomething}  />

      <button onClick={() => setCount((current) => current + 1)}>
        rerender!
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: 200,
    width: 200,
    border: '5px solid blue',
  },
};
