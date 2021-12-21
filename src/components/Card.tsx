import React from 'react';
import styled from 'styled-components';

interface CardProps {
  index: number;
  contents?: string;
  onClickDeleteCard: (e: number) => void;
}

function Card({ index, onClickDeleteCard, contents }: CardProps) {
  return (
    <CardWrapper>
      <div className="drag-mode-area">
        <div className="card-top-area"></div>
        <div className="card-bottom-area"></div>
      </div>
      <div className={'card-top-wrapper'}>
        <div>
          <div onClick={() => onClickDeleteCard(index)}>-</div>
          <div>M</div>
        </div>
      </div>
      <div>{contents}</div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  max-height: 300px;
  background-color: #ffffff99;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #38424a70;
  .card-top-wrapper {
    position: absolute;
    width: 100%;
    height: 20px;
    border: 1px solid #38424a70;
    border-radius: 5px 5px 0px 0px;
  }
  .drag-mode-area {
    position: relative;
    background-color: red;
    width: 100%;
    height: 100%;
    .card-top-area {
      position: absolute;
      background-color: green;
      width: 100%;
      height: 50%;
      top: 0;
    }
    .card-bottom-area {
      position: absolute;
      background-color: blue;
      width: 100%;
      height: 50%;
      bottom: 0;
    }
  }
`;
export default Card;
