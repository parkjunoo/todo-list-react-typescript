import { Page } from './MainPage.styled';
import React from 'react';
import ProcessCard from '../../components/ProcessCard';

function MainPage() {
  const processList = ['todo', 'doing', 'done'].map((title, index) => (
    <ProcessCard key={`proccess-list-${index}`} title={title} />
  ));
  return <Page>{processList}</Page>;
}

export default MainPage;
