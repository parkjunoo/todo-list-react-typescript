import React from 'react';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Styled from './app.styled';

const App = function () {
  const a = MainPage;
  return (
    <Styled.MainWrapper>
      <Header />
      MainPage
    </Styled.MainWrapper>
  );
};

export default App;
