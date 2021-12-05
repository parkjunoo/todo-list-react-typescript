import React from 'react';
import Styled from './Card.styled';

type CardProps = {
  index?: number;
  onClickDeleteCard?: () => void;
};

function Card({ onClickDeleteCard, index }: CardProps) {
  return (
    <Styled.CardWrapper>
      <Styled.CardTop>
        <Styled.CardButtonWrapper>
          <Styled.DeleteCardButton onClick={onClickDeleteCard}>de</Styled.DeleteCardButton>
          <Styled.ModifyCardButton />
        </Styled.CardButtonWrapper>
      </Styled.CardTop>
    </Styled.CardWrapper>
  );
}

export default Card;
