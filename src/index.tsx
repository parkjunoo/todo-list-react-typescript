import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
