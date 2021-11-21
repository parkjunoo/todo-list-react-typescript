import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    width: 100%;
    height: 100%;
    
    overflow: hidden;

    background-color: #f5f4f0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
