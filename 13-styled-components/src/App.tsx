import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import AnimatedBox from './components/AnimatedBox';
import Link from './components/Link';

const GlobalStyles = createGlobalStyle<{
  color: string;
}>`
  body {
    background-color: ${(props) => props.color};
  }
`;

function App() {
  const [color, setColor] = useState('purple');

  return (
    <div>
      <GlobalStyles color={color} />
      <Link color="violet">Hello World!</Link>
      <button
        onClick={() => {
          setColor('orange');
        }}
      >
        change color
      </button>
      <AnimatedBox />
    </div>
  );
}

export default App;
