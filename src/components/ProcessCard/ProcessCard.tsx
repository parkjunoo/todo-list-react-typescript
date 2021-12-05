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
    getCardList(title);
  }, []);

  const onClickAddCard = () => {
    setCardList((prevState: Card[]) => [
      ...prevState,
      {
        contents: '',
        cardId: 1,
      },
    ]);
  };
  const onClickDeleteCard = (): void => {
    console.log('delte');
    // const newCardList = cardList.splice(idx, 1);
    // setCardList(newCardList);
  };

  const getCardList = async (title: string) => {
    try {
      const { data } = await todoApi.getCardList(title);
      setCardList(data.data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.ProcessCardWrapper>
      <Styled.ProcessCardTop>
        {title}
        <Styled.ProcessCardOptionButton />
      </Styled.ProcessCardTop>
      {cardList.map((e, idx) => (
        <Card key={`cardlist-index-${idx}`} index={idx} onClickDeleteCard={onClickDeleteCard} />
      ))}
      <Styled.ProcessCardBottom onClick={onClickAddCard}>+ add Card</Styled.ProcessCardBottom>
    </Styled.ProcessCardWrapper>
  );
}

ProcessCard.propTypes = {};

export default ProcessCard;
