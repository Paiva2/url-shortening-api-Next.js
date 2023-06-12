import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-weight: 500
  }

  input:focus {
    outline: none;
  }

  body {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
  color: inherit; 
  text-decoration: inherit; 
}
`;
