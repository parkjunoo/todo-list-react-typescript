import React from 'react';
import Styled from './Card.styled';

type CardProps = {
  name?: string;
  mark?: string;
};

function Card({ name, mark }: CardProps) {
  return (
    <Styled.CardWrapper>
      <Styled.CardTop>
        <Styled.CardButtonWrapper>
          <Styled.DeleteCardButton />
          <Styled.ModifyCardButton />
        </Styled.CardButtonWrapper>
      </Styled.CardTop>
    </Styled.CardWrapper>
  );
}

Card.defaultProps = {
  mark: '',
};

export default Card;
