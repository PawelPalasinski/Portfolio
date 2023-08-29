import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Michroma', sans-serif;
  }

  ul {
    display: inline;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    font-family: 'Michroma', sans-serif;
  }
`;

export default GlobalStyles;
