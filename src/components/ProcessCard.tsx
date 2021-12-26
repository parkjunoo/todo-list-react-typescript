import React, { DragEvent, useEffect, useState } from 'react';
import Card from './Card';
import todoApi from '../service/todo';
import styled from 'styled-components';

interface ProcessCardProps {
  title: string;
}
interface Card {
  contents: string;
  cardId: number;
}

function ProcessCard({ title }: ProcessCardProps) {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [grabedCard, setGrabedCard] = useState<Card[]>([]);
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
    const $target = e.target as HTMLElement;
    // $target.classList.add('starting-drag');
    e.dataTransfer.setData('cardData', JSON.stringify(card));
    const findCard = cardList.findIndex((e) => e === card);
    setGrabedCard(cardList.splice(findCard, 1));
    setCardList([...cardList]);
  };

  // This function will be triggered when dropping
  const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
    e.preventDefault();
    // const $target = e.target as HTMLElement;
    const fromCard: Card = JSON.parse(e.dataTransfer.getData('cardData'));
    const findCard = cardList.findIndex((e) => e === card);
    cardList.splice(findCard, 0, fromCard);
    setCardList([...cardList]);
  };

  // This makes the third box become droppable
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const $target = e.target as HTMLElement;
    e.preventDefault();
  };

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

  const onClickDeleteCard = (index: number) => {
    console.log('delete', index);
    const tempCardList = cardList.slice();
    tempCardList.splice(index, 1);
    setCardList(tempCardList);
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
    <ProcessCardWrapper>
      <ProcessCardTop>
        {title}
        <ProcessCardOptionButton />
      </ProcessCardTop>
      {cardList.map((card, idx) => (
        <div
          key={`${title}-cardlist-list-${idx}`}
          onDragStart={(e) => dragStartHandler(e, card)}
          draggable={true}
          onDragOver={allowDrop}
          onDrop={(e) => dropHandler(e, card)}
        >
          <Card
            key={`cardlist-index-${idx}`}
            contents={card.contents}
            index={idx}
            onClickDeleteCard={onClickDeleteCard}
          />
        </div>
      ))}
      <ProcessCardBottom onClick={onClickAddCard}>+ add Card</ProcessCardBottom>
    </ProcessCardWrapper>
  );
}

ProcessCard.propTypes = {};

const ProcessCardWrapper = styled.div`
  display: inline-block;
  margin: 1.6%;
  width: 30%;
  background-color: #00000015;
  border-radius: 4px;
  .starting-drag {
    background-color: #000000;
  }
  .drag-margin-area {
    width: 100%;
    height: 50px;
  }
`;

const ProcessCardBottom = styled.div`
  display: inline-block;
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  text-align: center;
  border-radius: 0 0 4px 4px;
`;

const ProcessCardTop = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: 4px 4px 0 0;
`;

const ProcessCardOptionButton = styled.div`
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: green;
  font-size: 20px;
  right: 0;
  bottom: calc(50% - 12px);
  margin-right: 5px;
`;

export default ProcessCard;
