import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --body-color: #F7F7F7;
    --text-color: #3B3B3B;
    --primary-color: #5C36BB; 
  }

  ul, li, a {
    list-style: none;
    text-decoration: none;
    color: var(--text-color);
  }

  body {
    background: var(--body-color);
    color: var(--text-color);

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
    -webkit-font-smoothing: antialiased;
  }  
`;
