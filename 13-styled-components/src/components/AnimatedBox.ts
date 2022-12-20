import styled, {keyframes} from "styled-components";


const colorTransition = keyframes`
  0%   {
    background-color: red;
  }
  25%  {
    background-color: yellow;
  }
  50%  {
    background-color: blue;
  }
  100% {
    background-color: red;
  }
  `;

  const AnimatedBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: ${colorTransition};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  `;

  export default AnimatedBox;