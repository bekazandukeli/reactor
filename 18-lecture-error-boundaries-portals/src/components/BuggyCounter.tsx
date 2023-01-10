import React, { useState } from 'react';

export default function BuggyCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }

  if (counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }

  return (
    <>
      <h1 onClick={handleClick}>{counter}</h1>
    </>
  );
}
