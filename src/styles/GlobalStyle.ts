import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    font-size:62.5%;
  }
  body {
    width: 80%;
    height: 100%;
    background-color: #f5f4f0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
