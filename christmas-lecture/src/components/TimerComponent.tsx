import React, { useTransition } from 'react';
import useMount from '../hooks/useMount';

export default function TimerComponent() {
  useMount(() => {
    const intervalId = setInterval(() => {
      console.log('timer running');
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return <div>TimerComponent</div>;
}
