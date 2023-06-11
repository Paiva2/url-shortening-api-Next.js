import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-weight: 500
  }

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    gap: 3.75rem;
  }

  a {
  color: inherit; 
  text-decoration: inherit; 
}
`;
