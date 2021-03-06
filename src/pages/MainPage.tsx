import React from 'react';
import ProcessCard from '../components/ProcessCard';
import styled from 'styled-components';

function MainPage() {
  const processList = ['todo', 'doing', 'done'].map((title, index) => (
    <ProcessCard key={`proccess-list-${index}`} title={title} />
  ));
  return <Page>{processList}</Page>;
}

export default MainPage;

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f4f0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;
