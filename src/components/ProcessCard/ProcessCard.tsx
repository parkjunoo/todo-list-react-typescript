import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards';
import Styled from './ProcessCard.styled';

type ProcessCardProps = {
  title: string;
};
function ProcessCard({ title }: ProcessCardProps) {
  const CardList = () => {
    return <Card />;
  };
  return (
    <Styled.ProcessCardWrapper>
      <Styled.ProcessCardTop>
        {title}
        <Styled.ProcessCardOptionButton />
      </Styled.ProcessCardTop>

      <Styled.ProcessCardBottom>+ add Card</Styled.ProcessCardBottom>
    </Styled.ProcessCardWrapper>
  );
}

ProcessCard.propTypes = {};

export default ProcessCard;
