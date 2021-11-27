import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards';
import Styled from './ProcessCard.styled';

function ProcessCard() {
  return (
    <Styled.ProcessCardWrapper>
      <div>Todoo</div>
      <Card />
      <Card />
      <Card />
      <Styled.ProcessCardBottom>+ add Card</Styled.ProcessCardBottom>
    </Styled.ProcessCardWrapper>
  );
}

ProcessCard.propTypes = {};

export default ProcessCard;
