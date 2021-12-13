import React, { useEffect, useState } from 'react';
import Card from './Card';
import todoApi from '../service/todo';
import styled from 'styled-components';

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

interface ProcessCardProps {
  title: string;
}
interface Card {
  contents: string;
  cardId: number;
  grab?: any | null;
}

function ProcessCard({ title }: ProcessCardProps) {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [grab, setGrab] = useState<any>(null);

  const _onDragOver = (e: any) => {
    e.preventDefault();
  };

  const _onDragStart = (e: any) => {
    setGrab(e.target);
    e.target.classList.add('grabbing');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  const _onDragEnd = (e: any) => {
    e.target.classList.remove('grabbing');

    e.dataTransfer.dropEffect = 'move';
  };

  const _onDrop = (e: any) => {
    const grabPosition = Number(grab.dataset.position);
    const targetPosition = Number(e.target.dataset.position);

    const tempcardList = [...cardList];
    tempcardList[grabPosition] = cardList.splice(targetPosition, 1, cardList[grabPosition])[0];

    setCardList(cardList);
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
      <ul>
        {cardList.map((e, idx) => (
          <li
            draggable
            data-position={idx}
            onDragOver={_onDragOver}
            onDragStart={_onDragStart}
            onDragEnd={_onDragEnd}
            onDrop={_onDrop}
            key={`cardlist-index-${idx}`}
          >
            {}
            <Card
              key={`cardlist-index-${idx}`}
              contents={e.contents}
              index={idx}
              onClickDeleteCard={onClickDeleteCard}
            />
          </li>
        ))}
      </ul>
      <ProcessCardBottom onClick={onClickAddCard}>+ add Card</ProcessCardBottom>
    </ProcessCardWrapper>
  );
}

ProcessCard.propTypes = {};

export default ProcessCard;
