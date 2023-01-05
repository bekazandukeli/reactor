import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(current => current + 1)
  }

  const decrement = () => {
    setCount(current => current - 1)
  }

  return {
    count,
    increment,
    decrement,
  };
}