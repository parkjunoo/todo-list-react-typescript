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

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, data: Card) => {
    event.dataTransfer.setData('cardData', JSON.stringify(data));
    console.log('start', data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>, card: any) => {
    event.preventDefault();
    const data: Card = JSON.parse(event.dataTransfer.getData('cardData'));
    console.log(card);
    // setCardList();
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log(event.target);
    event.preventDefault();
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
      {cardList.map((e, idx) => (
        <div
          className="box1"
          key={`${title}-cardlist-list-${idx}`}
          onDragStart={(event) => dragStartHandler(event, e)}
          draggable={true}
          onDragOver={allowDrop}
          onDrop={(event) => dropHandler(event, e)}
        >
          <Card key={`cardlist-index-${idx}`} contents={e.contents} index={idx} onClickDeleteCard={onClickDeleteCard} />
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
