import React, { useEffect, useState } from 'react';
import Card from '../Cards';
import Styled from './ProcessCard.styled';
import todoApi from '../../service/todo';

interface ProcessCardProps {
  title: string;
}
interface Card {
  contents: string;
  cardId: number;
}

function ProcessCard({ title }: ProcessCardProps) {
  const [cardList, setCardList] = useState<Card[]>([]);
  useEffect(() => {
    console.log('!!!', getCardList());
  }, []);

  const getCardList = async () => {
    try {
      const res = await todoApi.getCardList();
    } catch (error) {
      console.log(error);
    }
  };

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
