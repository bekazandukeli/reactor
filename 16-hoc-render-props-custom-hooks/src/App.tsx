import { useEffect, useRef, useState } from 'react'
import ConditionalContainer from './components/ConditionalContainer';
import FramedDogImage from './components/DogImage';
import List from './components/List';
import withFrame from './components/withFrame';
import useCounter from './hooks/useCounter';
import useMount from './hooks/useMount';

const HelloWorld = (props: {}) => {
  return <div>Hello World!</div>;
}

const HelloWorldWithFrame = withFrame(HelloWorld);


function App() {
  const {count, decrement, increment} = useCounter();
  
  // const [hasWrapper, setHasWrapper] = useState(true);


  // useMount(() => {
  //   console.log('გაეშვა 1x');
  // });

  return (
    <div className="App">
      {/* <HelloWorldWithFrame />
      <FramedDogImage url="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" /> */}

      {/* <ConditionalContainer 
        visible={hasWrapper} 
      >
        <HelloWorld />
      </ConditionalContainer> */}

      {/* <button 
        onClick={() => {setHasWrapper(!hasWrapper)}}
      >
        Hide Container
      </button> */}

      {/* <List 
        data={['გამარჯობა', 'ნახვამდის', 'კამაზი']} 
        renderProps={(item) => <li>{item}</li>} 
      /> */}

      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;


