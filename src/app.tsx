import React from 'react';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Styled from './app.styled';

const App = function () {
  return (
    <Styled.MainWrapper>
      <Header />
      <NavBar />
      <MainPage />
    </Styled.MainWrapper>
  );
};

export default App;
