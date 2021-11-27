import { Page } from './MainPage.styled';
import React from 'react';
import ProcessCard from '../../components/ProcessCard';

const MainPage = () => {
  return (
    <Page>
      <ProcessCard />
      <ProcessCard />
      <ProcessCard />
    </Page>
  );
};

export default MainPage;
