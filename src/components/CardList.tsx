import React, { useState } from 'react';
import styled from 'styled-components';

type CardListProps = {
  name: string;
  mark: string;
  onDragStart: (param: any) => void;
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
