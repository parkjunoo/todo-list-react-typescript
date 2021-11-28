import React, { useState } from 'react';
import Styled from './CardList.styled';

type CardListProps = {
  name: string;
  mark: string;
};

function CardList({ name, mark }: CardListProps) {
  const [cardList, setCardList] = useState<object[]>();
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

CardList.defaultProps = {
  mark: '',
};

export default CardList;
