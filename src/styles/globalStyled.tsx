import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-style: normal;
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #484d57;
    }
  }

  html, body{
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size:${({ theme }) => theme.typography.htmlFontSize}; 
    color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
    background-color: ${({ theme }) =>
      theme.palette.color.neutrals.dark.dark_800};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
