import React from 'react';
import Styled from './Card.styled';

interface CardProps {
  index: number;
  onClickDeleteCard: (e: number) => void;
}

function Card({ index, onClickDeleteCard }: CardProps) {
  return (
    <Styled.CardWrapper>
      <Styled.CardTop>
        <Styled.CardButtonWrapper>
          <Styled.DeleteCardButton onClick={() => onClickDeleteCard(index)}>-</Styled.DeleteCardButton>
          <Styled.ModifyCardButton />
        </Styled.CardButtonWrapper>
      </Styled.CardTop>
    </Styled.CardWrapper>
  );
}

export default Card;
