import styled, { css } from "styled-components";

interface TitleProps {
  color: string;
}

const Link = styled.a<TitleProps>`
  ${(props) => css`
    font-size: 5em;
    color: ${props.color};
    
    @media only screen and (max-width: 500px) {
      color: green;
    }
  `}
`;

export default Link;